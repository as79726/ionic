import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CameraPage } from "../pages/camera/camera";
import { MapPage } from "../pages/map/map";
import { AlertPage } from "../pages/alert/alert";
import { CheckboxesPage } from "../pages/checkboxes/checkboxes";
import { AlertPageModule } from "../pages/alert/alert.module";
import { CameraPageModule } from "../pages/camera/camera.module";
import { CheckboxesPageModule } from "../pages/checkboxes/checkboxes.module";
import { MapPageModule } from "../pages/map/map.module";
import { ListPageModule } from "../pages/list/list.module";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AlertPageModule,
    CameraPageModule,
    CheckboxesPageModule,
    MapPageModule,
    ListPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
