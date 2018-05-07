import { User } from './../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//TODO: Injector for cyclic dependencies


import "rxjs/Rx";
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';

 
@Injectable()
export class AuthService {

  user: User = new User();

  storage: Storage = window.localStorage;

  //FIXME: interceptors, cyclic dependencies

  constructor(private httpClient: HttpClient) { 

    this.authStatus =   new BehaviorSubject(this.isAuthenticated());
  }

  public redirectUrl:string;
  authStatus: BehaviorSubject<boolean>;


  isAuthenticated() {
    let token = this.storage.getItem('token');

    if (token)
      return true;
    
    return false;
  }

  getToken() {
    return this.storage.getItem('token');
  }

  hasRole(role: string) {
    // includes from ES7
    return this.user.roles.includes(role);
  }

  login(username: string, password: string):Observable<any> {
    let data = {
      username: username,
      password: password
    };

    return this.httpClient
               .post(environment.authEndPoint, data)
               .map ( (data: any) => {
                 //data has token, roles
                 console.log("DAta ", data);
                 this.user = data.identity;
                 console.log("User", this.user);
                 this.storage.setItem("token", data.token);
                 this.authStatus.next(true);
                 return data;
               });
    
  }

  logout() {
    this.storage.clear();
    this.authStatus.next(false);
    this.user = new User();
  }
}
