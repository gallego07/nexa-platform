import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';


interface Necesidad {
  icono: string;
  nombre: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, FormsModule, RouterLink],
})
export class HomePage {
  busqueda = '';

  necesidades: Necesidad[] = [
    { icono: '💻', nombre: 'Mi espacio de trabajo' },
    { icono: '🏠', nombre: 'Mi hogar' },
    { icono: '🎁', nombre: 'Quiero hacer un regalo' },
    { icono: '🎮', nombre: 'Mi setup' },
    { icono: '📚', nombre: 'Necesito estudiar' },
    { icono: '✈️', nombre: 'Voy a viajar' },
    { icono: '👗', nombre: 'Quiero crear un look' },
    { icono: '✨', nombre: 'Tengo otra idea' },
  ];

  buscar() {
    const texto = this.busqueda.trim();
    if (!texto) {
      return;
    }
    console.log('Búsqueda:', texto);
  }

  elegirNecesidad(necesidad: Necesidad) {
    console.log('Necesidad elegida:', necesidad.nombre);
  }
}