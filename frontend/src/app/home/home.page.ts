import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

interface Necesidad {
  icono: string;
  nombre: string;
  color: string;
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
    { icono: '💻', nombre: 'Mi espacio de trabajo', color: '#6C63FF' },
    { icono: '🏠', nombre: 'Mi hogar', color: '#00C9A7' },
    { icono: '🎁', nombre: 'Quiero hacer un regalo', color: '#FF7A59' },
    { icono: '🎮', nombre: 'Mi setup', color: '#FFC857' },
    { icono: '📚', nombre: 'Necesito estudiar', color: '#C9C4FF' },
    { icono: '✈️', nombre: 'Voy a viajar', color: '#38BDF8' },
    { icono: '👗', nombre: 'Quiero crear un look', color: '#FF5FA2' },
    { icono: '✨', nombre: 'Tengo otra idea', color: '#E4E4F0' },
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