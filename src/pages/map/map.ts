import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  LatLng,
  Marker
} from "@ionic-native/google-maps";

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {}

  @ViewChild("map") mapElement: ElementRef;
  map: GoogleMap;

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(position => {
      let latlng = new LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: latlng,
          zoom: 18,
          tilt: 30
        }
      };

      this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log("Map is ready!");

        // Now you can use all methods safely.

        //map animation
        /*
        let mapOptions = {
          target: latlng,
          zoom: 18,
          tilt: 30
        };

        this.map.animateCamera(mapOptions);
        */

        this.map
          .addMarker({
            title: "Ionic",
            icon: "blue",
            animation: "DROP",
            position: latlng
          })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
              alert("clicked");
            });
          });
      });
    });
  }
}
