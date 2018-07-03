import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');
import { Router } from '@angular/router';

@Injectable()
export class SignupService {
  constructor(private router: Router) {}
  register(uEmail, uPassword) {
    return firebase
      .createUser({
        email: uEmail,
        password: uPassword
      })
      .then(
        function(result: any) {
          firebase
            .push('/Users', {
              username: uEmail.email,
              uid: result.key
            })
            .then(
              function(result: any) {
                this.router.navigate(['/login']);
                return 'saved';
              },
              function(errorMessage: any) {
                console.log('error');
              }
            );
          return JSON.stringify(result);
        },
        function(errorMessage: any) {
          console.log('error');
        }
      );
  }
}
