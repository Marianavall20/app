import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

declare var google: any;

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  map: any; // Manejador del mapa.
  coords : any = { lat: 0, lng: 0 }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private geolocation: Geolocation,
    public modalCtrl: ModalController,
    public  platform: Platform,) {

      platform.ready().then(() => {
        //Laplataforma está lista y ya tenemos acceso a los plugins. 
        this.obtenerPosicion();
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Inicio');
    this.coords.lat = this.navParams.get('lat');
    this.coords.lng = this.navParams.get('lng');
  }

  loadMap(){
    let mapContainer = document.getElementById('map');
     this.map = new google.maps.Map(mapContainer, {
       center: this.coords,
       zoom: 12
     });

     //Colocamos el marcador

     let miMarker = new google.maps.Marker({
       icon : 'assets/imgs/localizacion.png',
       map: this.map,
       position: this.coords
     });
 }

 nuevoSitio(){
  // Aquí vamos a abrir el modal para diseñar nuestro sitio.
  let mimodal = this.modalCtrl.create( 'ModalNuevoSitioPage',this.coords );
  mimodal.present();
}


 obtenerPosicion():any{
  this.geolocation.getCurrentPosition().then(res => {
    this.coords.lat = res.coords.latitude;
    this.coords.lng = res.coords.longitude;

    this.loadMap();
  })
  .catch(
    (error)=>{
      console.log(error);
    }
  );
}

}
  