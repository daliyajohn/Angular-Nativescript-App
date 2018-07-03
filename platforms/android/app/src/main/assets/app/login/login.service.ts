import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');
import { BackendService } from './backend.service';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private router: Router) {}
  login(loginEmail, loginPassword) {
    return firebase
      .login({
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: loginEmail,
          password: loginPassword
        }
      })
      .then(
        (result: any) => {
          BackendService.token = result.uid;
          console.log(result.uid);
          this.router.navigate(['/list']);
          return JSON.stringify(result);
        },
        (errorMessage: any) => {
          alert(errorMessage);
        }
      );
  }
}
