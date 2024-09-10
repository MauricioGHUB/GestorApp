import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular'; 

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage implements OnInit {

  perfilForm!: FormGroup;

  usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
    nombreUsuario: 'juanperez',
    fotoPerfil: 'assets/img/juan.jpg'
  };

  alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Cancelado');
      }
    },
    {
      text: 'Confirmar',
      handler: () => {
        this.guardarCambios(); 
        this.navCtrl.navigateRoot('/tabs/tab1'); 
      }
    }
  ];

  constructor(private fb: FormBuilder, private alertController: AlertController, private navCtrl: NavController) {}

  ngOnInit() {
    this.perfilForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      apellido: [this.usuario.apellido, Validators.required],
      nombreUsuario: [this.usuario.nombreUsuario, Validators.required]
    });
  }

  async confirmarCambios() {
    const alert = await this.alertController.create({
      header: 'Confirmación',
      message: '¿Estás seguro de que deseas guardar los cambios?',
      buttons: this.alertButtons
    });

    await alert.present();
  }

  guardarCambios() {
    if (this.perfilForm.valid) {
      this.usuario = { ...this.usuario, ...this.perfilForm.value };
      console.log('Perfil actualizado:', this.usuario);
    }
  }
}
