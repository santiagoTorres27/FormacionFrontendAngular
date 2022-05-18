export interface User {
  id?: string;
  name: string;
  password: string;
  password2: string;
  isSubscribed: boolean;
  email: string;
  country: string;
  city: string;
}

export interface Country {
  name: string;
  independent: boolean;
}
