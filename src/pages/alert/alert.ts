import { Component } from "@angular/core";
import {
  IonicPage,
  AlertController,
  NavController,
  NavParams
} from "ionic-angular";

/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-alert",
  templateUrl: "alert.html"
})
export class AlertPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AlertPage");
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "Low battery",
      subTitle: "10% of battery remaining",
      buttons: ["Dismiss"]
    });
    alert.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: "Confirm purchase",
      message: "Do you want to buy this book?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Buy",
          handler: () => {
            console.log("Buy clicked");
          }
        }
      ]
    });
    alert.present();
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: "Login",
      inputs: [
        {
          name: "username",
          placeholder: "Username"
        },
        {
          name: "password",
          placeholder: "Password",
          type: "password"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Login",
          handler: data => {
            console.log(JSON.stringify(data));
          }
        }
      ]
    });
    alert.present();
  }
}
