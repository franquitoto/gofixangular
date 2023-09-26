export interface Producto {
  id: string;
  imagen_url: string;
  imagen_nombre: string;
  imagen_path: string;
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;
  modelo: string;
  capacidad: string;
  marca: string;
  color: string;
  destacado: 'SI' | 'NO';
  created_at: string; // Esto debe ser un string en formato de fecha y hora, por ejemplo: '2023-09-24 12:34:56'
  updated_at: string; // Esto debe ser un string en formato de fecha y hora, por ejemplo: '2023-09-24 12:34:56'
}
