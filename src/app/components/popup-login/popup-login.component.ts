import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-popup-login',
  templateUrl: './popup-login.component.html',
  styleUrls: ['./popup-login.component.scss']
})
export class PopupLoginComponent {
  spanLogin: boolean = false
  mensaje: string = ''
  constructor(public usuariosService: UsuariosService) {}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });


  // Funcion que se activa cuando enviamos el formulario
  onSubmit() {
    // Obtenemos los valores de los imputs
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
  
    // chequeamos que los valores no sean undefined o nulos
    if (username && password) {
      // le pasamos los valores al servicio que se comunica con la api
      this.usuariosService.login(username, password).subscribe(
        (response) => {
          // acciones si el ingreso es exitoso
          console.log('ingreso exitoso', response)
          sessionStorage.setItem("token", JSON.stringify(response.token))
          this.usuariosService.esAdmin(JSON.stringify(response.token))
          this.usuariosService.ocultarPopup()
        },
        (error) => {
          // acciones si hay un error al ingresar
          this.mensaje = error.error.mensaje
          this.spanLogin = true
          console.log(error.error.mensaje)
        }
      );
    } else {
      // acciones si faltan datos en el form
      this.mensaje = '"Falta username o password"'
      this.spanLogin = true
      console.log("Falta username o password")
    }
  }

  get controlNombre() {
    return this.loginForm.get('username');
  }
}
