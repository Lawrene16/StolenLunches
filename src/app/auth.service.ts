import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firedata =  firebase.database();
  fireauth = firebase.auth();

  constructor() { }

  createnewuser(firstname, lastname, email, password){
    return new Promise((resolve, reject) => {
      this.fireauth.createUserWithEmailAndPassword(email, password).then((res) =>{
        this.firedata.ref('/users').child(this.fireauth.currentUser.uid).set({
          firstname: firstname,
          lastname: lastname,
          email: email,
        }).then(() =>{
          resolve(res)
        })
      }).catch((err) =>{
        reject(err)
      });
    })
  }

  loginExistingUser(email, password){
    return new Promise((resolve, reject) => {
      this.fireauth.signInWithEmailAndPassword(email, password).then((res) =>{
        resolve(res)
      }).catch((err) =>{
        reject(err)
      })
    })
  }

  logoutUser(){
      this.fireauth.signOut();
  }
}
