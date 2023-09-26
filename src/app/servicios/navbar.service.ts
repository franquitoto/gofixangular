import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  public mostrarModalNavbar : boolean = false

  constructor() { }

  mostrarModalNavbarFunction(){
    if(this.mostrarModalNavbar){
      this.mostrarModalNavbar = false
    }else{
      this.mostrarModalNavbar = true
    }
  }
}
