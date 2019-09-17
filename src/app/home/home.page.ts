import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, 
    private authService: AuthService) {
    console.log(firebase.auth().currentUser)
  }

  logout(){
    this.authService.logoutUser();
    this.router.navigateByUrl('/home');
  }

}
