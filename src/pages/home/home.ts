import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReadcomicsPage } from '../readcomics/readcomics';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToReadcomics(params){
    if (!params) params = {};
    this.navCtrl.push(ReadcomicsPage);
  }
}
