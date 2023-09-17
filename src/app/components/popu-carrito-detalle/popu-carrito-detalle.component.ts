import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popu-carrito-detalle',
  templateUrl: './popu-carrito-detalle.component.html',
  styleUrls: ['../popup-carrito/popup-carrito.component.scss']
})
export class PopuCarritoDetalleComponent {
  @Input() detalle: any;

}
