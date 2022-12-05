import { Injectable } from '@angular/core';
import firebase = require('firebase/compat');
import { User } from './model/user.model';

@Injectable()
export class AuthService {
  private loggedInStatus = JSON.parse(
    localStorage.getItem('loggedIn') || 'false'
  );

  setLoginStatus(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get LoginStatus() {
    return JSON.parse(
      localStorage.getItem('loggedIn') || this.loggedInStatus.toString()
    );
  }

  signUpUser(email: string, password: string) {
    return firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  signInUser(email: string, password: string) {
    return firebase.default.auth().signInWithEmailAndPassword(email, password);
  }
}
