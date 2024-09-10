import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router,
              private menucontroller:MenuController
  ) {}

  redirigirATab2() {
    this.router.navigate(['/tab2']);
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
