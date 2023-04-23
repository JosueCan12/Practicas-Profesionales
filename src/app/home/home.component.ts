import { Component } from '@angular/core';
import { Actividad } from '../card';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  modalVisible = false;

  showModal() {
    this.modalVisible = !this.modalVisible;
  }
  actividades: Actividad[] = [
    {
      nombre: 'Crear formularios',
      horaInicio: '09:00 am',
      horaFin: '10:00 pm',
      colorFondo: 'bg-[#FFE9A0]'
    },
    {
      nombre: 'Crear banners',
      horaInicio: '10:30 am',
      horaFin: '12:00 pm',
      colorFondo: ' bg-[#FFE9A0]'
    },
    {
      nombre: 'Crear logotipos',
      horaInicio: '13:00 pm',
      horaFin: '14:30 pm',
      colorFondo: 'bg-[#CFCDCD]'
    },
    {
      nombre: 'Entrega de avances',
      horaInicio: '13:00 pm',
      horaFin: '14:30 pm',
      colorFondo: 'bg-[#FFA0A0]'
    },
    {
      nombre: 'Test seguridad',
      horaInicio: '13:00 pm',
      horaFin: '14:30 pm',
      colorFondo: 'bg-[#A8FFA0]'
    },
  ];


}
