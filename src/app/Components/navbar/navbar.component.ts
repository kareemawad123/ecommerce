import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthenService } from 'src/app/services/user-authen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: boolean = false;

  ngOnInit(): void {
    // this.user = this.userAuth.userStatus;
    this.userStatusChangeWithObs().subscribe(stutas=>{
      this.user = stutas;
    })
  }
  constructor(private userAuth: UserAuthenService, private router: Router){

  }
  creditNumber: string = '';
  loginFunc(){
    this.userAuth.login("kareemawad120@gmail.com",'123456');
  }
  logoutFunc(){
    alert('thanks for browsing');
    this.router.navigate(['/login']);
    this.userAuth.logout();
  }
  userStatusChangeWithObs():Observable<boolean>{
    return this.userAuth.isLoggedUserBehSyb.asObservable();
  }
}
