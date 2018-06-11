import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');

@Injectable()
export class SignupService {
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
