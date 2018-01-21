import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { PhotoViewer } from "@ionic-native/photo-viewer";
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-camera",
  templateUrl: "camera.html"
})
export class CameraPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public alertCtrl: AlertController,
    private photoViewer: PhotoViewer
  ) {}

  image: string = "";

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        this.displayErrorAlert(err);
      }
    );
  }

  onChoosePicture() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        this.displayErrorAlert(err);
      }
    );
  }

  displayErrorAlert(err) {
    /*let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: err,
      buttons: ["OK"]
    });
    alert.present();*/
  }

  PhotoViewer() {
    if (this.image != "") this.photoViewer.show(this.image, "拍摄照片");
  }
}
