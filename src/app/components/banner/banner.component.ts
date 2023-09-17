import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // creamos variables para poder mostrar u ocultar los banner
  mostrarBanner1 = true; // Mostrar banner 1 por defecto
  mostrarBanner2 = false;

  // estas funciones trabajan en conjunto con un ngIf en el html del componente
  mostrarBannerAnterior() {
    this.mostrarBanner1 = false;
    this.mostrarBanner2 = true;
  }

  mostrarSiguienteBanner() {
    this.mostrarBanner1 = true;
    this.mostrarBanner2 = false;
  }

  // esta parte trabaja en conjunto con [ngClass] para asignarle una clase
  // a cada banner dependiendo de la variable mostrarBanner
  // La clase que le asigna ejecuta una animacion
  get claseBanner1(): string {
    return this.mostrarBanner1 ? 'show' : 'hide';
  }

  get claseBanner2(): string {
    return this.mostrarBanner2 ? 'show' : 'hide';
  }
}
