import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { StolenlunchService } from '../stolenlunch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  @ViewChild('myInput') myInput: ElementRef;

  prayer = "";
  constructor(private toastCtrl: ToastController,
    private router: Router,
    private stolenLunchService: StolenlunchService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  resize() {
    this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
}

  sendRequest(){
    if(this.prayer == ""){
      this.presentToast("Please input a prayer request")
    }else if(this.prayer.length < 3){
      this.presentToast("Prayer request length has to be more than 3 letters")
    }else{
      this.loadingCtrl.create({
        message: 'Receiving your prayer request'
      }).then((load) =>{
        load.present();
        this.stolenLunchService.sendPrayerRequest(this.prayer).then(() =>{
          load.dismiss();
          this.presentToast("Prayer request submitted successfully")
          this.prayer = "";
        }).catch((err) =>{
          load.dismiss()
          this.presentToast(err)
        })
      })
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
