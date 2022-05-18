import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const url: string = `${this.baseUrl}/all?fields=name`;
    return this.http.get<Country[]>(url);
  }
}
