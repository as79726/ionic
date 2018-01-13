import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private alertCtrl: AlertController) {

  }

  click(value:string){
    let alert = this.alertCtrl.create({
      title: "alertCtrl",
      subTitle: value,
      buttons: ["OK"]
    });
    alert.present();
  }
