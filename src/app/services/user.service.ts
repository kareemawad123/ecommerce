import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  http={}
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    }
   }

  signUpUser(newUser: IUser):Observable<IUser>{
    return this.httpClient.post<IUser>(`${environment.API}/users`, JSON.stringify(newUser),this.http);
  }

}
