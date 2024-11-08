import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quinta-hoja',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quinta-hoja.component.html',
  styleUrl: './quinta-hoja.component.css'
})
export class QuintaHojaComponent {
  title = 'Miranos tambien en';
  description = 'Siguenos en nuestras redes sociales para estar al día con las ofertas y promociones, tambien se realizan peluches personalizados pero tienen un tiempo de creación de +1 semana.';
  links = [
    { href: '#', text: 'WhatsApp' },
    { href: '#', text: 'Instagram' },
    { href: '#', text: 'Facebook' },
    { href: '#', text: 'Tiktok' }
  ];
  stats = [
    { label: 'Años en el mercado', value: '10+' },
    { label: 'Peluches personalizados', value: '100+' },
    { label: 'Tiempo de entrega', value: '3-7 días' },
    { label: 'Uso del Doctor de osos', value: 'Ilimitado' }
  ];
}
