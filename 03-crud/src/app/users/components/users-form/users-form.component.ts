import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Country } from '../../interfaces/user.interface';
import { CountriesService } from '../../services/countries.service';
import { UsersService } from '../../services/users.service';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  @ViewChild('formDirective') formDirective!: NgForm;
  countries: Country[] = [];
  updating: boolean = false;
  userId!: string;

  // Create reactive form
  form: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required,
      ]),
      password2: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.validatorService.emailRegexValidation),
      ]),
      isSubscribed: new FormControl(true),
      country: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
    },
    {
      validators: [
        this.validatorService.equalPasswords('password', 'password2'),
      ],
    }
  );

  // Getter for password errors
  get passwordErrorMsg(): string {
    const error = this.form.get('password')?.errors;
    if (error?.['minlength']) {
      return 'La contraseña debe tener al menos 6 caracteres';
    } else if (error?.['required']) {
      return 'La contraseña es obligatoria';
    }
    return '';
  }

  // Getter for email errors
  get emailErrorMsg(): string {
    const errors = this.form.get('email')?.errors;
    if (errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato del email es incorrecto';
    }
    return '';
  }

  constructor(
    private snackBar: MatSnackBar,
    private validatorService: ValidatorService,
    private countriesService: CountriesService,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });

    //Id emitter
    this.usersService.userId.subscribe((id) => {
      this.usersService.getUser(id).subscribe((user) => {
        this.form.reset({
          name: user.name,
          password: user.password,
          password2: user.password2,
          email: user.email,
          isSubscribed: user.isSubscribed,
          country: user.country,
          city: user.city,
        });
        this.userId = id;
        this.updating = true;
      });
    });
  }

  // Show messages using snackbar
  openSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'OK', {
      duration: 2500,
    });
  }

  // Check if any field has errors
  checkInvalidField(field: string) {
    return this.form.get(field)?.invalid && this.form.get(field)?.touched;
  }

  // Submit form
  submitForm() {
    if (this.form.invalid) {
      this.openSnackbar('Debes rellenar todos los campos!');
    } else {
      const user = { ...this.form.value };

      if (this.updating) {
        this.usersService.updateUser(user, this.userId).subscribe(() => {
          this.openSnackbar('El usuario se ha actualizado con éxito!');
          this.formDirective.resetForm();

          // this.usersService.sendRequest();
          this.usersService.updateDataEmitter.emit(true);
          this.updating = false;
        });
      } else {
        this.usersService.addUsers(user).subscribe(() => {
          this.openSnackbar('El usuario se ha agregado con éxito!');
          this.formDirective.resetForm();

          //this.usersService.sendRequest();
          this.usersService.updateDataEmitter.emit(true);
        });
      }
    }
  }

  cancel() {
    this.updating = false;
    this.formDirective.resetForm();
  }
}
