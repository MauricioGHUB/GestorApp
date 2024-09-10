import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  mostrarImagenQR: boolean = false;

  constructor(private menucontroller:MenuController) {}

  mostrarQR() {
    this.mostrarImagenQR = !this.mostrarImagenQR;
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
