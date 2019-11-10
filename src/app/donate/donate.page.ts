import { Component, OnInit } from "@angular/core";
import { ToastController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: "app-donate",
  templateUrl: "./donate.page.html",
  styleUrls: ["./donate.page.scss"]
})
export class DonatePage implements OnInit {
  oneSelected = false;
  twoSelected = false;
  threeSelected = false;
  fourSelected = false;
  amountchosen = "";

  constructor(public toastCtrl: ToastController,
    public router: Router) {}

  ngOnInit() {}

  selectAmount(index) {
    switch (index) {
      case 0:
        this.amountchosen = "$25";
        this.oneSelected = !this.oneSelected;
        this.twoSelected = false;
        this.threeSelected = false;
        this.fourSelected = false;
        break;

      case 1:
        this.amountchosen = "$50";
        this.twoSelected = !this.twoSelected;
        this.oneSelected = false;
        this.threeSelected = false;
        this.fourSelected = false;
        break;

      case 2:
          this.amountchosen = "$100";
          this.threeSelected = !this.threeSelected;
          this.twoSelected = false;
          this.oneSelected = false;
          this.fourSelected = false;
        break;

      case 3:
          this.amountchosen = "$150";
          this.fourSelected = !this.fourSelected;
          this.oneSelected = false;
          this.threeSelected = false;
          this.twoSelected = false;
        break;
    }
  }

  makePayment(){
    if(this.amountchosen == ""){
      this.presentToast("Please select an amount")
    }else{
      let navigationExtras: NavigationExtras = {
        state: {
          amount: this.amountchosen
        }
      };
      this.router.navigate(['selectpaymentmethod'], navigationExtras);
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
