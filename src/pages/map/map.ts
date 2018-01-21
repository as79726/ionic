import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  MarkerOptions,
  LatLng,
  Geocoder,
  GeocoderRequest,
  GeocoderResult
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
  myPosition: any = {};

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then(position => {
      let latlng = new LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      this.myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

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

        let markerOptions: MarkerOptions = {
          title: "Ionic",
          icon: "blue",
          animation: "DROP",
          position: latlng
        };
        this.map.addMarker(markerOptions).then(marker => {
          this.doGeocode(marker);
          marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            alert("clicked");
          });
        });
      });
    });
  }

  //在google map 上顯示街道名稱
  doGeocode(marker) {
    let request: GeocoderRequest = {
      position: new LatLng(this.myPosition.latitude, this.myPosition.longitude)
    };
    Geocoder.geocode(request).then((results: GeocoderResult[]) => {

      let address = [
        (results[0].thoroughfare || "") +
          " " +
          (results[0].subThoroughfare || ""),
        results[0].locality
      ].join(", ");
      marker.setTitle(address);
      marker.showInfoWindow();
    });
  }

}
