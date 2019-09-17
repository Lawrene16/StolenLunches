import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class StolenlunchService {

  firedata = firebase.database();
  fireauth = firebase.auth();
  constructor() {

   }

   sendPrayerRequest(request){
     var key = this.firedata.ref('/users').push().key;
     return new Promise((resolve, reject) =>{
      this.firedata.ref('/requests').child(this.fireauth.currentUser.uid)
      .child(key).set({
        prayer: request
      }).then(() =>{
        resolve(key);
      }).catch((err) =>{
        reject(err)
      })
     });
   }

   joinStolenLunches(){
    var key = this.firedata.ref('/users').push().key;
    return new Promise((resolve, reject) =>{
      // this.firedata.ref('/newmembers').child()
    })
   }
}
