import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/servicios/productos.service';
import Swal from 'sweetalert2'
interface Producto {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  capacidad: string;
  color: string;
  descripcion: string;
  imagen: {
    nombreImg: string;
    pathImg: string;
    urlImg: string;
  };
  marca: string;
  modelo: string;
}

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
})
export class BackofficeComponent {
  filename: string = 'Seleccionar archivo';
  errorUser: any = {
    valor: false,
    mensaje: '',
  };
  errorProduct: any = {
    valor: false,
    mensaje: ''
  }
  users: any = '';
  constructor(
    public usuarioService: UsuariosService,
    private productosService: ProductosService
  ) {
    this.users = [];
    this.usuarioService.compareUsername().subscribe(
      (data: any) => {
        this.users = data; // Asignar los datos de usuarios al arreglo
      },
      (error: any) => {
        console.error('Error al obtener los datos de usuarios', error);
      }
    );
  }

  nuevoProductoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria: new FormControl('celulares', Validators.required),
    precio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    modelo: new FormControl(),
    capacidad: new FormControl(),
    marca: new FormControl(),
    color: new FormControl(),
    imagen: new FormControl(null), // Valor inicial para la imagen
  });

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.filename = file.name;
      console.log(file);
      this.nuevoProductoForm.get('imagen')?.setValue(file);
    }
  }

  onSubmitProduct() {
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
      formData.append('destacado','NO' || '');

      this.productosService.agregarProducto(formData).subscribe(
        (response: any) => {
          // Manejar la respuesta del servidor
          console.log('Producto agregado con éxito', response);
          this.filename = 'Seleccionar archivo'
          this.nuevoProductoForm.reset()
          const urlImg = response.urlImg
          const titulo = response.nombre
          const id = response.idUnico
          Swal.fire({
            title: titulo,
            text: 'Modal with a custom image.',
            imageUrl: urlImg,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
            confirmButtonText:'<a routerLink="/productos"><i class="fa fa-thumbs-up">ok</i></a>',
            html:
          'Producto agregado correctamente, ' +
          `<a href="/detalle/${id}">ver producto</a>`  + 
          'en detalle',
          })
        },
        (error) => {
          // Manejar errores
          console.error('Error al agregar el producto', error);
          this.errorProduct.valor = true;
          console.log(error.error)
          this.errorProduct.mensaje = error.error.Mensaje
        }
      );
    }else{
      this.errorProduct.valor = true
      this.errorProduct.mensaje = 'Debe completar todos los campos'
      setTimeout(() => {
        this.errorProduct.valor = false
        this.errorProduct.mensaje = ''
      }, 5000);
    }
  }

  controlCategoria(event: Event){

  }
  nuevoUsuarioForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    rol: new FormControl('user', Validators.required),
  });
  onSubmitUser() {
    if (this.nuevoUsuarioForm.valid) {
      console.log(this.nuevoUsuarioForm.value);
      const formValue = this.nuevoUsuarioForm.getRawValue();      
      this.usuarioService.createUser(formValue).subscribe(
        (response) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          console.log('usuario agregado exitosamente', response);
          this.nuevoUsuarioForm.reset();
        },
        (error) => {
          console.log('hubo un error', error.error.mensaje);
          this.errorUser.value = true;
          this.errorUser.mensaje = error.error.mensaje;
        }
      );
    } else {
      this.errorUser.valor = true;
      this.errorUser.mensaje = 'Debe completar todos los campos';
      setTimeout(() => {
        this.errorUser.valor = false
        this.errorUser.mensaje = ''
      }, 5000);
    }
  }
  compararValorUsername(event: any) {
    const username = event.target.value;
    const usuarioExistente = this.users.find(
      (user: any) => user.username === username
    );

    if (usuarioExistente) {
      console.log('El nombre de usuario ya existe en la base de datos');
      // Puedes mostrar un mensaje de error o realizar otras acciones aquí
      this.errorUser.valor = true;
      this.errorUser.mensaje =
        'El nombre de usuario ya existe en la base de datos';
    } else {
      console.log('El nombre de usuario no existe en la base de datos');
      // Puedes realizar acciones adicionales si el nombre de usuario no existe
      this.errorUser.valor = false; 
      this.errorUser.mensaje = ''; 
    }
  }
  compareValorEmail(event: any){
    const email = event.target.value;
    const emailExiste = this.users.find(
      (user: any) => user.email === email
    );
    if(emailExiste){
      console.log('El el email ya existe en la base de datos');
      // Puedes mostrar un mensaje de error o realizar otras acciones aquí
      this.errorUser.valor = true;
      this.errorUser.mensaje =
        'El email ya existe en la base de datos';
    }else{
      console.log('El nombre de usuario no existe en la base de datos');
      // Puedes realizar acciones adicionales si el nombre de usuario no existe
      this.errorUser.valor = false; 
      this.errorUser.mensaje = ''; 
    }
  }
}
