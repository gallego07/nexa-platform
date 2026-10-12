import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [IonContent, IonInput, IonButton, CommonModule, FormsModule, RouterLink]
})
export class LoginPage {
  correo = '';
  contrasena = '';

  iniciarSesion() {
    console.log('Intento de inicio de sesión con:', this.correo);
  }
}