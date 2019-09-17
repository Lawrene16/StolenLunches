import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  firstname = "";
  lastname = "";
  email = "";
  password = "";

  constructor(private router: Router, 
    private toastCtrl: ToastController,
    private authService: AuthService,
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  register(){
    if(this.firstname == "" || this.firstname.length < 2){
      this.presentToast("First name field is either blank or too short")
    }else if(this.lastname == "" || this.lastname.length < 2){
      this.presentToast("Last name field is either blank or too short")
    }else if(this.email == "" || this.email.length < 3 ||
     !this.email.includes('@') || !this.email.includes('.')){
      this.presentToast("Invalid email address")
    }else if(this.password == "" || this.password.length < 6){
      this.presentToast("Password name field is either blank or too short")
    }else{
      this.loadingController.create({
        message: 'Logging In',
      }).then((res) => {
        res.present();
        this.authService.createnewuser(this.firstname, this.lastname, this.email, this.password).then(() =>{
          res.dismiss();
          this.router.navigateByUrl('/home')
        }).catch((err) =>{
          res.dismiss()
          this.presentToast(err)
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
