import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ComunidadAutonoma } from '../interfaces/covid.interface';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  apiUrl: string = 'https://covid19.mathdro.id/api';

  constructor(private http: HttpClient) {}

  // Get confirmed covid cases
  getCovidCases(): Observable<ComunidadAutonoma[]> {
    return this.http.get<ComunidadAutonoma[]>(
      `${this.apiUrl}/countries/spain/confirmed`
    );
  }

  getCovidCasesData() {
    return this.getCovidCases().pipe(
      map((data: ComunidadAutonoma[]) => {
        return {
          labels: data.map((item) => item.provinceState),
          datasets: [
            {
              data: data.map((item) => item.confirmed),
              label: 'Casos confirmados',
            },
            {
              data: data.map((item) => item.deaths),
              label: 'Muertes',
            },
          ],
        };
      })
    );
  }

  // Get death covid cases
  getCovidDeaths(): Observable<ComunidadAutonoma[]> {
    return this.http.get<ComunidadAutonoma[]>(
      `${this.apiUrl}/countries/spain/deaths`
    );
  }

  getCovidDeathsData() {
    return this.getCovidDeaths().pipe(
      map((data: ComunidadAutonoma[]) => {
        return {
          labels: data.map((item) => item.provinceState),
          datasets: [
            {
              data: data.map((item) => item.deaths),
              label: 'Fallecimientos',
            },
          ],
        };
      })
    );
  }
}
