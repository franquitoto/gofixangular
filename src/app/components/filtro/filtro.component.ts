import { Component } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  marca : any='';
  categoria:any='';
  capacidad:any='';
  color:any='';
  constructor(private productosService: ProductosService){}
  ngOnInit() : void{
    this.obtenerCategoria();
    this.obtenerMarca();
    this.obtenerCapacidad();
    this.obtenerColor();
  }
  obtenerCategoria(){
    this.productosService.obtenerCategorias('categoria').subscribe((data: any) =>{
      this.categoria = data
      console.log(this.categoria);
    })
  }
  obtenerCapacidad(){
    this.productosService.obtenerCategorias('capacidad').subscribe((data: any) =>{
      this.capacidad = data
      console.log(this.capacidad);
    })
  }
  obtenerMarca(){
    this.productosService.obtenerCategorias('marca').subscribe((data: any) =>{
      this.marca = data
      console.log(this.marca);
    })
  }
  obtenerColor(){
    this.productosService.obtenerCategorias('color').subscribe((data: any) =>{
      this.color = data
      console.log(this.color);
    })
  }

}
