import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-viewstudy',
  templateUrl: './viewstudy.page.html',
  styleUrls: ['./viewstudy.page.scss'],
})
export class ViewstudyPage implements OnInit {

  noOfLikes = 57;
  hasliked = false;
  comments = [{name: 'Amanda', text: 'Amazing work! keep it up!', color: '#e9e9e9'},
  {name: 'Andrew', text: 'Hi would you mind', color: '#ffffff'},
  {name: 'Lucy', text: 'Amazing work! keep it up!', color: '#e9e9e9'},]
  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  playVideo(){
    this.presentToast("No video available yet")
  }

  increase(){
    if(this.hasliked){
      this.presentToast("You have already liked this video")
    }else{
      this.noOfLikes += 1;
      this.hasliked = true;
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
