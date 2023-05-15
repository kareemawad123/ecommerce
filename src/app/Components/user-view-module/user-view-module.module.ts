import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'profile', component: ViewProfileComponent, title: 'Profile Page' },
  { path: 'edit-profile', component: EditProfileComponent, title: 'Edit Profile Page' },
  { path: 'login', component: LoginComponent, title: 'Login Page' },
]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserViewModuleModule { }
