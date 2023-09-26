import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito.service';
import { UsuariosService } from './servicios/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gofixAngular';
  constructor(private carritoService: CarritoService, private usuariosService: UsuariosService){}
  ngOnInit() {
    const token = sessionStorage.getItem('token');
    this.usuariosService.esAdmin(token)
    if (token) {
      // Le sacamos las comillas al token (hecho con chat gpt)
      const tokenWithoutQuotes = token.replace(/^"(.*)"$/, '$1');
  
      console.log(tokenWithoutQuotes);
      this.usuariosService.logueado(tokenWithoutQuotes).subscribe(
        (logueado) => {
          console.log(logueado);
          if (logueado) {
            // El token corresponde a un admin, puedes realizar acciones adicionales aquí.
            this.usuariosService.ocultarPopup()
            console.log('El usuario esta logueado');
          } else {
            // El token no corresponde a un admin.
            console.log('El usuario no esta logueado');
            this.usuariosService.mostrarPopup()
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
  

  ocultarCarritoEmergente(){
    this.carritoService.ocultarCarritoEmergente()
  }
}
