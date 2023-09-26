import { Component } from '@angular/core';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['./locales.component.scss']
})
export class LocalesComponent {
  locales: any = [
    {
      "local": "Almagro",
      "direccion": "Av. Corrientes 4673",
      "horario": "Lunes a Viernes de 10:00 a 20:00 hs, Sábados de 10:00 a 20:00 hs",
      "whatsapp": "11 6209-4444",
      "telefono": "11 4864-7700",
      "mail": "almagro@gofix.com.ar"
    },
    {
      "local": "Barrio Norte",
      "direccion": "Juncal 1394",
      "horario": "Lunes a Viernes de 10:00 a 19:00 hs, Sábados de 10:00 a 13:00 hs",
      "whatsapp": "11 3431-8352",
      "telefono": "11 4811-9039",
      "mail": "juncal@gofix.com.ar"
    },
    {
      "local": "Belgrano",
      "direccion": "Arcos 1922",
      "horario": "Lunes a Viernes de 09:00 a 19:00 hs, Sábados de 10:00 a 18:00 hs",
      "whatsapp": "11 7629-2060",
      "telefono": "11 5263 0646",
      "mail": "belgrano@gofix.com.ar"
    },
    {
      "local": "Belgrano R",
      "direccion": "Elcano 3025",
      "horario": "Lunes a Viernes de 10:00 a 19:00hs, Sábados de 10:00 a 13:00 hs",
      "whatsapp": "11 3067-1617",
      "telefono": "11 3067-1617",
      "mail": "elcano@gofix.com.ar"
    },
    {
      "local": "Caballito",
      "direccion": "Rosario 594",
      "horario": "Lunes a Viernes de 09:00 a 19:00 hs, Sábados de 10:00 a 15:00 hs",
      "whatsapp": "11 2571 8986",
      "telefono": "11 2571 8986",
      "mail": "caballito@gofix.com.ar"
    },
    {
      "local": "Cañitas",
      "direccion": "Olleros 1786",
      "horario": "Lunes a Viernes de 10:00 a 19:00 hs, Sábados de 10:00 a 13:00 hs",
      "whatsapp": "11 6878-3755",
      "telefono": "11 6878-3755",
      "mail": "canitas@gofix.com.ar"
    },
    {
      "local": "Flores",
      "direccion": "Camacuá 27",
      "horario": "Lunes a Sábados de 10:00 a 19:00 hs, Domingo cerrado",
      "whatsapp": "11 3830-2393",
      "telefono": "11 3830-2393",
      "mail": "flores@gofix.com.ar"
    },
    {
      "local": "Microcentro",
      "direccion": "Bernardo de Irigoyen 72",
      "horario": "Lunes a Sábado de 08:00 a 20:00hs, Domingo de 11:00 a 20:00hs",
      "whatsapp": "11 3701-7028",
      "telefono": "11 3701-7028",
      "mail": "gofixbernardo@gmail.com"
    },
    {
      "local": "Nuñez",
      "direccion": "Av. Monroe 1716",
      "horario": "Lunes a Sábado de 10:00 a 19:00hs, Domingo de 10:00 a 13:00hs",
      "whatsapp": "11 6266-4088",
      "telefono": "11 6266-4088",
      "mail": "nunez@gofix.com.ar"
    },
    {
      "local": "Obelisco",
      "direccion": "Av. Corrientes 928",
      "horario": "Lunes a Sábado de 08:00 a 20:00hs, Domingo de 10:00 a 20:00hs",
      "whatsapp": "11 6526-3636",
      "telefono": "11 6526-3636",
      "mail": "gofixcorrientes928@gmail.com"
    },
    {
      "local": "Palermo Chico",
      "direccion": "Cabello 3658",
      "horario": "Lunes a Viernes de 10:00 a 20:00hs, Sábados de 10:00 a 20:00hs",
      "whatsapp": "11 5879 2970",
      "telefono": "11 4806-5510",
      "mail": "cabello@gofix.com.ar"
    },
    {
      "local": "Palermo Hollywood",
      "direccion": "Fitz Roy 1663",
      "horario": "Lunes a Viernes de 10:00 a 19:00hs, Sábados de 10:00 a 13:00hs",
      "whatsapp": "11 6674-3939",
      "telefono": "11 6674-3939",
      "mail": "palermo@gofix.com.ar"
    },
    {
      "local": "Palermo Soho",
      "direccion": "Borges 2007",
      "horario": "Lunes a Viernes de 10:00 a 19:00hs, Sábados de 10:00 a 18:00hs",
      "whatsapp": "11 6266-4088",
      "telefono": "11 6266-4088",
      "mail": "palermosoho@gofix.com.ar"
    },
    {
      "local": "Recoleta",
      "direccion": "Junín 1307",
      "horario": "Lunes a Viernes de 10:00 a 19:00hs, Sábados de 10:00 a 13:00hs",
      "whatsapp": "11 2596-1764",
      "telefono": "11 2596-1764",
      "mail": "junin@gofix.com.ar"
    },
    {
      "local": "Tribunales",
      "direccion": "Tucumán 1565",
      "horario": "Lunes a Viernes de 10:00 a 19:00hs, Sábados y Domingos cerrado",
      "whatsapp": "11 2720-5022",
      "telefono": "11 4371-1851",
      "mail": "tucuman@gofix.com.ar"
    },
    {
      "local": "Villa Crespo",
      "direccion": "Murillo 609",
      "horario": "Lunes a Viernes de 10:00 a 19:30hs, Sábados de 10:00 a 18:00 hs",
      "whatsapp": "+54 9 11 3208-8077",
      "telefono": "+54 9 11 3208-8077",
      "mail": "villacrespo@gofix.com.ar"
    },
    {
      "local": "Villa del Parque",
      "direccion": "Cuenca 3199",
      "horario": "Lunes a Sábado de 10:00 a 20:00hs, Domingos cerrado",
      "whatsapp": "11 6836-3636",
      "telefono": "11 4504-9355",
      "mail": "villadelparque@gofix.com.ar"
    }
  ]
  
}
