import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent {
  filename : string = 'Seleccionar archivo'
  constructor(
    public usuarioService: UsuariosService,
    private productosService: ProductosService
  ) {}

  nuevoProductoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    modelo: new FormControl(),
    capacidad: new FormControl(),
    marca: new FormControl(),
    color: new FormControl(),
    imagen: new FormControl(null) // Valor inicial para la imagen
  });

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filename = file.name
      console.log(file)
      this.nuevoProductoForm.get('imagen')?.setValue(file);
    }
  }

  onSubmit() {
    if (this.nuevoProductoForm.valid) {
      const formData = new FormData();
      const formValue = this.nuevoProductoForm.getRawValue();

      formData.append('nombre', formValue.nombre || '');
      formData.append('categoria', formValue.categoria || '');
      formData.append('precio', formValue.precio || '');
      formData.append('descripcion', formValue.descripcion || '');
      formData.append('modelo', formValue.modelo || '');
      formData.append('capacidad', formValue.capacidad || '');
      formData.append('marca', formValue.marca || '');
      formData.append('color', formValue.color || '');
      formData.append('imagen', formValue.imagen || '');

      this.productosService.agregarProducto(formData).subscribe(
        (response) => {
          // Manejar la respuesta del servidor
          console.log('Producto agregado con éxito', response);
        },
        (error) => {
          // Manejar errores
          console.error('Error al agregar el producto', error);
        }
      );
    }
  }
}
