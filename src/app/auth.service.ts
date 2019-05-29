import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private fbAuth: AngularFireAuth, private router: Router) { }

  getGoogleLogin(){
  	return this.fbAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
  }

  getGithubLogin(){
  	return this.fbAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      );
  }
}
