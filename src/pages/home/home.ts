import { Component } from "@angular/core";
import {
  NavController,
  ActionSheetController
} from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController
  ) {}



  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Modify your album",
      buttons: [
        {
          text: "確認",
          role: "destructive",
          handler: () => {
            console.log("Destructive clicked");
          }
        },
        {
          text: "取消",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });

    actionSheet.present();
  }
}
