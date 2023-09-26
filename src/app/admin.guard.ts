import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuariosService } from './servicios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private usuariosService: UsuariosService) {}

  async canActivate(): Promise<boolean> {
    const token = sessionStorage.getItem('token');

    // Verifica si el usuario tiene un token válido o si cumple con los criterios de administrador
    if (token) {
      // Le sacamos las comillas al token (hecho con chat gpt)
      const tokenWithoutQuotes = token.replace(/^"(.*)"$/, '$1');
      
      try {
        const esAdmin = await this.usuariosService.verificarToken(tokenWithoutQuotes).toPromise();

        if (esAdmin) {
          // El token corresponde a un admin, puedes realizar acciones adicionales aquí.
          console.log('Es un administrador');
          return true;
        } else {
          // El token no corresponde a un admin.
          console.log('No es un administrador');
          return false;
        }
      } catch (error) {
        console.error('Error al verificar el token:', error);
        return false;
      }
    } else {
      console.log('No existe token bro');
      return false;
    }
  }
}
