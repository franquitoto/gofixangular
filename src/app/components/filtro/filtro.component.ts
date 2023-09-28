import { Component } from '@angular/core';
import { FiltroService } from 'src/app/servicios/filtro.service';
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
  filtrosSeleccionados: any = {
    categoria: [],
    marca: [],
    capacidad: [],
    color: [],
    // Agrega más categorías de filtros según tus necesidades
  };
  constructor(private productosService: ProductosService, private filtroService: FiltroService){}
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
  // nuevoFiltro($event: any){
  //   if($event.target.checked){
  //     console.log('activo');
  //   }else{
  //     console.log('inactivo')
  //   }
  // }
  nuevoFiltro(event: any) {
    const filtro = event.target.name
    const valor = event.target.value
    if (event.target.checked) {
      this.filtrosSeleccionados[filtro].push(valor);
      this.productosService.filtrar(this.filtrosSeleccionados).subscribe(
        (response) =>{

          console.log(this.filtrosSeleccionados)
          this.filtroService.setProductosFiltrados(response);
        },
        (error) =>{
          console.log(error)
        }
      )
      console.log(this.filtrosSeleccionados)
    } else {
      const index = this.filtrosSeleccionados[filtro].indexOf(valor);
      if (index !== -1) {
        this.filtrosSeleccionados[filtro].splice(index, 1);
        this.productosService.filtrar(this.filtrosSeleccionados).subscribe(
          (response) =>{
            console.log(this.filtrosSeleccionados)
            this.filtroService.setProductosFiltrados(response);
          },
          (error) =>{
            console.log(error)
          }
        )
        
      }
    }
  }
}
