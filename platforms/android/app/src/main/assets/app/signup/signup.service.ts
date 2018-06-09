import { Injectable } from '@angular/core';
import firebase = require('nativescript-plugin-firebase');

@Injectable()
export class SignupService {
  register(uEmail, uPassword) {
    return firebase
      .createUser({
        email: uEmail.email,
        password: uPassword.password
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
                alert(errorMessage);
              }
            );
          return JSON.stringify(result);
        },
        function(errorMessage: any) {
          alert(errorMessage);
        }
      );
  }
}
