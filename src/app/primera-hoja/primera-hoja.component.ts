import { Component } from '@angular/core';

@Component({
  selector: 'app-primera-hoja',
  standalone: true,
  imports: [],
  templateUrl: './primera-hoja.component.html',
  styleUrl: './primera-hoja.component.css'
})
export class PrimeraHojaComponent {
  title = 'Angular 17 App';
  city = 'Quito';
}
