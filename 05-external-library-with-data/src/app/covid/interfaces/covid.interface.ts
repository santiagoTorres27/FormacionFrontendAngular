export interface ComunidadAutonoma {
  provinceState: string;
  countryRegion: CountryRegion;
  lastUpdate: number;
  lat: number;
  long: number;
  confirmed: number;
  deaths: number;
  recovered: null;
  active: number;
  admin2: null;
  fips: null;
  combinedKey: string;
  incidentRate: number;
  peopleTested: null;
  peopleHospitalized: null;
  uid: number;
  iso3: Iso3;
  cases28Days: number;
  deaths28Days: number;
}

export enum CountryRegion {
  Spain = 'Spain',
}

export enum Iso3 {
  Esp = 'ESP',
}
