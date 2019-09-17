import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  password = "";
  ngOnInit() {
  }

  loaderToShow: any;
 
  constructor(
    public router: Router,
    private authService: AuthService,
    private toastCtrl: ToastController,
    public loadingController: LoadingController
  ) {
  }
 
  login() {
    if(this.email == "" || this.email.length < 3 ||
    !this.email.includes('@') || !this.email.includes('.')){
      this.presentToast("Invalid username/email address")
    }else if(this.password == "" || this.password.length < 6){
      this.presentToast("Password name field is either blank or too short")      
    }else{
      this.loadingController.create({
        message: 'Logging In',
      }).then((res) => {
        res.present();
        this.authService.loginExistingUser(this.email, this.password).then(() =>{
          res.dismiss();
          this.router.navigateByUrl('/home');
        }).catch((err) =>{
          this.presentToast(err)
          res.dismiss()
        })
      });
  
    }
  }

  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      color: 'dark'
    });
    toast.present();
  }

}
