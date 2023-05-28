import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/iuser';
import { UserService } from 'src/app/services/user.service';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormRecord, NgForm, Validators} from '@angular/forms';

function passwordMatcher(password: AbstractControl):{[key:string]:boolean}|null{
  const passwordControl = password.get('password');
  const confirmPassControl = password.get('confirmPassword');

  if(passwordControl?.pristine || confirmPassControl?.pristine){
    return null;
  }
  if(passwordControl?.value == confirmPassControl?.value){
    return null;
  }
  return {match: true}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: IUser = {} as IUser;
  userForm: FormGroup;
  passwordMassage: string = '';

  private validationMessage = {
    require: 'Please enter your password',
    password: 'Please enter valid password'
  }
  constructor(private userService: UserService, private router: Router,private fb: FormBuilder) {
    // this.userForm = new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    //   email: new FormControl('',[Validators.required, Validators.email]),
    //   // password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    //   // confirmPassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
    //   // mobile:new FormControl('',[Validators.required, Validators.pattern('[0-9]{11}')]),
    //   // addressCity: new FormControl('',[Validators.required,]),
    //   // addressStreet: new FormControl('',[Validators.required]),
    // });

    this.userForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.minLength(5)]],
      email: ['',[Validators.required, Validators.email]],
      passwordGroup: this.fb.group({
        password: ['',[Validators.required]],
        confirmPassword: ['',[Validators.required]]
      },{
        validator: passwordMatcher
      }),
      address: this.fb.array([]),
      mobile:this.fb.array([
        new FormGroup({
          mobile: new FormControl('',[Validators.required,Validators.pattern('[0-9]{10}')])
        }),
      ])

    })
  }

  ngOnInit(): void {
    this.addAddress();
    // this.addMobile();
    // console.log(this.mobile);

  }
  get fullName(){
    return this.userForm.get('fullName');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }
  setMassage(password: AbstractControl){
    this.passwordMassage = '';
    if((password.touched || password.dirty) && password.errors){
      this.passwordMassage = this.validationMessage.require;
    }
  }

  get address(): FormArray {
    return this.userForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      street: ['', [Validators.required]],
    });
  }
  addAddress() {
    // console.log(this.mobile.controls[0].touched);
    // console.log(this.mobile.controls[0].dirty);
    // console.log(this.mobile.controls[0].valid);

    // console.log(this.mobile.controls[1].touched);
    // console.log(this.mobile.controls[1].dirty);
    // console.log(this.mobile.controls[1].valid);

    // error here only add () to newAddress
    this.address.push(this.newAddress());
  }
  removeAddress(num: number) {
    this.address.removeAt(num);
    console.log(num);
  }

  get mobile(): FormArray {
    return this.userForm.get('mobile') as FormArray;
  }
  newMobile(): FormGroup {
    return this.fb.group({
      mobile: ['', [Validators.required,Validators.pattern('[0-9]{10}')]]
    });
  }
  addMobile() {
    this.mobile.push(this.newMobile());
  }
  removeMobile(num: number) {
    // console.log(this.mobile.controls[1].get('mobile')?.errors?.['required']);
    // console.log(this.address.controls[0].get('city')?.errors?.['required']);

    // console.log(this.mobile.controls[num].dirty);
    // console.log(this.userForm.get('mobile'));
    this.mobile.removeAt(num);
    console.log(num);
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

