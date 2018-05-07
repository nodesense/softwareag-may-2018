import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth-menu',
  templateUrl: './auth-menu.component.html',
  styleUrls: ['./auth-menu.component.css']
})
export class AuthMenuComponent implements OnInit {

  authStatus$: Observable<boolean>;

   

  constructor(private authService: AuthService, 
              private router: Router) { }

  ngOnInit() {
    this.authStatus$ = this.authService.authStatus;
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

}
