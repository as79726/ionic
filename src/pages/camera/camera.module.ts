import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPage } from './camera';
import { Camera } from "@ionic-native/camera";
import { PhotoViewer } from "@ionic-native/photo-viewer";



@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  providers: [
    Camera,
    PhotoViewer
  ]
})
export class CameraPageModule {}
