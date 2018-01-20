import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { CameraPage } from "../pages/camera/camera";
import { Camera } from "@ionic-native/camera";
import { PhotoViewer } from "@ionic-native/photo-viewer";
import { MapPage } from "../pages/map/map";
import { GoogleMaps, Geocoder } from "@ionic-native/google-maps";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [MyApp, HomePage, ListPage, CameraPage, MapPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, CameraPage, MapPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    PhotoViewer,
    GoogleMaps,
    Geolocation,
    Geocoder
  ]
})
export class AppModule {}
