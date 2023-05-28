import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserAuthenService } from '../services/user-authen.service';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


export const userGuard: CanActivateFn = (route, state) => {

  const userAuthenService = inject(UserAuthenService);
  const router = inject(Router);

    if(userAuthenService.userStatus){
      return true;
    }else{
      alert("Please Login Frist");
      router.navigate(['/login']);
      return false;
    }

}
