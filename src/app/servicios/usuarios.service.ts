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
  public adminAcces: boolean = false

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
    console.log(requestBody)
    return this.http.post('http://localhost:3000/api/login', requestBody);
  }
  verificarToken(token: string): Observable<boolean> {
    const headers = new HttpHeaders().set('token', token);
    return this.http.post<boolean>('http://localhost:3000/api/isAdmin', null, { headers });
  }
  createUser(formData: any): Observable<any>{
    console.log(formData)
    return this.http.post<boolean>('http://localhost:3000/api/user', formData)
  }
  compareUsername(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/user');
  }
  logueado(token: string): Observable<boolean> {
    const headers = new HttpHeaders().set('token', token);
    return this.http.post<boolean>('http://localhost:3000/api/logueado', null, { headers });
  }
  esAdmin(token: any){
    if (token) {
      // Le sacamos las comillas al token (hecho con chat gpt)
      const tokenWithoutQuotes = token.replace(/^"(.*)"$/, '$1');
      this.verificarToken(tokenWithoutQuotes).subscribe(
        (esAdmin) => {
          console.log(esAdmin);
          if (esAdmin) {
            // El token corresponde a un admin, puedes realizar acciones adicionales aquí.
            this.adminAcces = true
            console.log('Es un administrador');
          } else {
            // El token no corresponde a un admin.
            console.log('No es un administrador');
          }
        },
        (error) => {
          console.error('Error al verificar el token:', error);
        }
      );
    } else {
      console.log('No existe token bro');
    }
  }
}
