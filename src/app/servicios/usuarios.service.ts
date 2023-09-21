import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public popupLogin: boolean = true
  public formOpcion: boolean = true
  public formUsuario: boolean = false
  public formProduct: boolean = false

  constructor(private http: HttpClient) {}

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
  login(username: string, password: string): Observable<any> {
    const requestBody = { username, password };
    return this.http.post('http://localhost:3000/api/auth/signin', requestBody);
  }
  verificarToken(token: string): Observable<boolean> {
    const headers = new HttpHeaders().set('token', token);
    return this.http.post<boolean>('http://localhost:3000/api/auth/isadmin', null, { headers });
  }
}
