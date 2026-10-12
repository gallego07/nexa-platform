import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonButton, IonContent, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [IonContent, IonInput, IonButton, FormsModule, RouterLink]
})
export class RegisterPage {
  paso = 1;
  nombre = '';
  correo = '';
  contrasena = '';
  rol: 'comprador' | 'vendedor' | '' = '';

  get correoValido(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.correo);
  }

  get paso1Valido(): boolean {
    return (
      this.nombre.trim().length >= 2 &&
      this.correoValido &&
      this.contrasena.length >= 8
    );
  }

  continuar() {
    if (this.paso1Valido) {
      this.paso = 2;
    }
  }

  volver() {
    this.paso = 1;
  }

  elegirRol(rol: 'comprador' | 'vendedor') {
    this.rol = rol;
  }

  crearCuenta() {
    if (!this.rol) {
      return;
    }
    console.log('Cuenta de prueba:', {
      nombre: this.nombre,
      correo: this.correo,
      rol: this.rol
    });
  }
}