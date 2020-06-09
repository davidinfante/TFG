import { Injectable } from '@angular/core';
import {HeaderOption} from '../classes/header-option';

@Injectable({
  providedIn: 'root'
})
/**
 * All user header menu buttons
 */
export class HeaderOptionsService {
  private headerOptions: HeaderOption[] = [
    {
      title: 'Mi Asistente',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Mi Terapeuta',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Mi Cuidador',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Mis Medallas',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Cuestionarios',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Social',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Salir',
      icon: 'clipboard-outline',
      fill: 'solid',
      color: 'primary',
      position: 'end'
    },
  ];

  constructor() { }

  /**
   * Return all existent header options
   */
  getAllHeaderOptions() {
    return  [...this.headerOptions];
  }
}
