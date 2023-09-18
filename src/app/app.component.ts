import { Component } from '@angular/core';
import { CarritoService } from './servicios/carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gofixAngular';
  constructor(private carritoService: CarritoService){}
}
