import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
  isLoggedUserBehSyb: BehaviorSubject<boolean>;

  // constructor function
  constructor(  ) {
    this.isLoggedUserBehSyb = new BehaviorSubject<boolean>(this.userStatus);
  }

  // get user status
  get userStatus():boolean{
    return (localStorage.getItem('token'))?true:false;
  }

  // login user
  login(userEmail: string, userPassword: string){
    let userToken = '112233';
    localStorage.setItem('token', userToken);
    this.isLoggedUserBehSyb.next(true);
  }

  // logout user
  logout(){
    localStorage.removeItem('token');
    this.isLoggedUserBehSyb.next(false);
  }
}
