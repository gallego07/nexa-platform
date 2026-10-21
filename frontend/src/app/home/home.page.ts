import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

interface Necesidad {
  icono: string;
  nombre: string;
  color: string;
}

interface Solucion {
  titulo: string;
  productos: number;
  precio: string;
  alto: number;
  fondo: string;
  guardada: boolean;
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

  soluciones: Solucion[] = [
    { titulo: 'Escritorio para programar', productos: 5, precio: '$1,2 M', alto: 240, fondo: 'linear-gradient(160deg, #6C63FF, #9B8CFF)', guardada: false },
    { titulo: 'Rincón de estudio pequeño', productos: 4, precio: '$480 mil', alto: 300, fondo: 'linear-gradient(160deg, #00C9A7, #7FE8D3)', guardada: false },
    { titulo: 'Regalo para amantes del café', productos: 3, precio: '$210 mil', alto: 190, fondo: 'linear-gradient(160deg, #FF7A59, #FFB199)', guardada: false },
    { titulo: 'Setup gamer completo', productos: 7, precio: '$3,4 M', alto: 270, fondo: 'linear-gradient(160deg, #151522, #6C63FF)', guardada: false },
    { titulo: 'Sala acogedora', productos: 6, precio: '$2,1 M', alto: 210, fondo: 'linear-gradient(160deg, #FFC857, #FFE29A)', guardada: false },
    { titulo: 'Kit de viaje ligero', productos: 5, precio: '$350 mil', alto: 290, fondo: 'linear-gradient(160deg, #0EA5E9, #7DD3FC)', guardada: false },
    { titulo: 'Look de oficina', productos: 4, precio: '$540 mil', alto: 200, fondo: 'linear-gradient(160deg, #FF5FA2, #FFB3D3)', guardada: false },
    { titulo: 'Home office minimal', productos: 5, precio: '$1,6 M', alto: 250, fondo: 'linear-gradient(160deg, #A855F7, #D8B4FE)', guardada: false },
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

  alternarGuardada(solucion: Solucion) {
    solucion.guardada = !solucion.guardada;
  }
}