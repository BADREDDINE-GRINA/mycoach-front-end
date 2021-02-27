import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({providedIn: 'root'})
export class AuthService{
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcTZieF5xNUKoyU-9cJFogmcaTBim40x0',
      { email, password, returnSecureToken: true}
    );
  }
}
