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

    if (token) {
      console.log(token)
      this.usuariosService.verificarToken(token).subscribe(
        (esAdmin) => {
          console.log(esAdmin)
          if (esAdmin) {
            // El token corresponde a un admin, puedes realizar acciones adicionales aquí.
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

  ocultarCarritoEmergente(){
    this.carritoService.ocultarCarritoEmergente()
  }
}
