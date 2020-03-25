import { Injectable } from '@angular/core';
import {Page} from "../interfaces/page";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  private pages: Page[] = [
    {
      title: 'Inicio',
      url: '/home',
      icon: '',
      showIcon: false,
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Proyecto',
      url: '/project',
      icon: '',
      showIcon: false,
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Participantes',
      url: '/members',
      icon: '',
      showIcon: false,
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Ejercicios',
      url: '/exercises',
      icon: '',
      showIcon: false,
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Contacto',
      url: '/contact',
      icon: '',
      showIcon: false,
      fill: 'solid',
      color: 'primary',
      position: 'start'
    },
    {
      title: 'Registrarse',
      url: '/register',
      icon: 'clipboard-outline',
      showIcon: true,
      fill: 'solid',
      color: 'primary',
      position: 'end'
    },
    {
      title: 'Iniciar Sesión',
      url: '/access',
      icon: 'log-in-outline',
      showIcon: true,
      fill: 'solid',
      color: 'danger',
      position: 'end'
    },
  ]

  private pagesSource = new BehaviorSubject(this.pages);
  pagesObs = this.pagesSource.asObservable();

  constructor() { }

  /**
   * Devuelve todas las pages existentes
   */
  getAllPages() {
    return  [...this.pages];
  }

  /**
   * Devuelve una page especificando su URL
   */
  getPage(pageUrl: string) {
    return {
      ...this.pages.find(page => {
        return page.url === pageUrl;
      })
    };
  }

}
