import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MapPage } from "./map";
import { GoogleMaps, Geocoder } from "@ionic-native/google-maps";
import { Geolocation } from "@ionic-native/geolocation";

@NgModule({
  declarations: [MapPage],
  imports: [IonicPageModule.forChild(MapPage)],
  providers: [GoogleMaps, Geolocation]
})
export class MapPageModule {}
