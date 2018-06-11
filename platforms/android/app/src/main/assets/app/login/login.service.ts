import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');
import { BackendService } from './backend.service';

@Injectable()
export class LoginService {
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
          return JSON.stringify(result);
        },
        (errorMessage: any) => {
          alert(errorMessage);
        }
      );
  }
}
