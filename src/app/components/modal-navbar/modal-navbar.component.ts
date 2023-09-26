import { Component } from '@angular/core';
import { NavbarService } from 'src/app/servicios/navbar.service';

@Component({
  selector: 'app-modal-navbar',
  templateUrl: './modal-navbar.component.html',
  styleUrls: ['./modal-navbar.component.scss']
})
export class ModalNavbarComponent {
  constructor(public navbarService: NavbarService) {

  }
  cerrar(){
    this.navbarService.mostrarModalNavbarFunction()
  }

}
