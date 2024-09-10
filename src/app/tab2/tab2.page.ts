import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Actividad {
  titulo: string;
  descripcion: string;
  imagen: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  actividades: Actividad[] = [];

  constructor(private menucontroller:MenuController) {
    this.actividades = [
      {
        titulo: 'Conferencia Angular',
        descripcion: 'Seminario avanzado sobre Angular',
        imagen: 'assets/img/angular.png'
      },
      {
        titulo: 'Ionic Workshop',
        descripcion: 'Taller práctico de desarrollo móvil con Ionic',
        imagen: 'assets/img/ionic.jfif'
      },
      {
        titulo: 'UX/UI Design',
        descripcion: 'Introducción al diseño UX/UI para aplicaciones',
        imagen: 'assets/img/ux.png'
      },
      {
        titulo: 'Taller de Machine Learning',
        descripcion: 'Un taller intensivo sobre técnicas y algoritmos de aprendizaje automático.',
        imagen: 'assets/img/machine.jpg'
      },
      {
        titulo: 'Ciberseguridad Avanzada',
        descripcion: 'Seminario sobre desarrollo web utilizando React.js, uno de los frameworks de JavaScript más populares.',
        imagen: 'assets/img/ciberseguridad.jpg'
      },
      {
        titulo: 'Blockchain y Criptomonedas',
        descripcion: ' Introducción a la tecnología blockchain y su impacto en las criptomonedas.',
        imagen: 'assets/img/blockchain.jpg'
      },
      {
        titulo: 'DevOps y Automatización',
        descripcion: ' Curso sobre prácticas DevOps y automatización de procesos de desarrollo.',
        imagen: 'assets/img/dev.png'
      },
      {
        titulo: 'Realidad Aumentada y Virtual',
        descripcion: 'Taller práctico sobre el desarrollo de aplicaciones de realidad aumentada (AR) y realidad virtual (VR).',
        imagen: 'assets/img/rv.png'
      },
      {
        titulo: 'Programación en Rust',
        descripcion: 'Curso sobre Rust, un lenguaje de programación de sistemas que ofrece seguridad en la memoria y alta concurrencia.',
        imagen: 'assets/img/rust.jpg'
      }

    ];
  }

  ngOnInit() {}

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
