import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public popupLogin: boolean = true
  public formOpcion: boolean = true
  public formUsuario: boolean = false
  public formProduct: boolean = false

  constructor() { }

  mostrarPopup(){
    this.popupLogin = true
  }
  ocultarPopup(){
    this.popupLogin = false
  }
  mostrarFormOpcion(){
    this.formOpcion = true
    this.formUsuario = false
    this.formProduct = false
  }
  ocultarFormOpcion(){
    this.formOpcion = false
  }
  mostrarFormUsuario(){
    this.formUsuario = true
    this.formOpcion = false
  }
  ocultarFormUsuario(){
    this.formUsuario = false
  }
  mostrarFormProduct(){
    this.formProduct = true
    this.formOpcion = false
  }
  ocultarFormProduct(){
    this.formProduct = false
  }
}
