import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/services/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  user: IUser = {} as IUser;

  constructor(private userService: UserService, private router: Router,) {
  }
  id:number = 2;
  test(){
    console.log("sub test");
  }
  addUser() {
    console.log("Adding user");

    // let user: IUser = {
    //   name: "John",
    //   email: "john@gmail.com",
    //   password: "123456",
    // };
    // this.userService.signUpUser(user).subscribe(user => {
    //   console.log(user);
    // })
  }
}
