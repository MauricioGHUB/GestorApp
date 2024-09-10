import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface Menu {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu: Menu[] = [
    { icon: 'person-outline', name: 'Mi perfil', redirecTo: '/perfil' },
    { icon: 'person-outline', name: 'Modificar perfil', redirecTo: '/actualizar' },
    { icon: 'people-outline', name: 'Lista de asistentes', redirecTo: '/asistentes' },
    { icon: 'calendar-outline', name: 'Lista de Eventos', redirecTo: '/tabs/tab2' },
    { icon: 'list-outline', name: 'Gestión de Eventos', redirecTo: '/lista-event' }
  ];

  constructor(private router: Router, private menuCtrl: MenuController) {}

  exitSess() {
    this.menuCtrl.close('first'); 
    this.router.navigate(['/comienzo']);
  }
}
