import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MisTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-tabs',
  templateUrl: 'mis-tabs.html'
})
export class MisTabsPage {

  inicioRoot = 'InicioPage'
  listadoRoot = 'ListadoPage'
  infoRoot = 'InfoPage'


  constructor(public navCtrl: NavController) {}

}
 