import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PrimeraHojaComponent } from "./primera-hoja/primera-hoja.component";
import { SegundaHojaComponent } from "./segunda-hoja/segunda-hoja.component";
import { TerceraHojaComponent } from "./tercera-hoja/tercera-hoja.component";
import { CuartaHojaComponent } from "./cuarta-hoja/cuarta-hoja.component";
import { QuintaHojaComponent } from "./quinta-hoja/quinta-hoja.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CabeceraComponent, PrimeraHojaComponent, SegundaHojaComponent, TerceraHojaComponent, CuartaHojaComponent, QuintaHojaComponent],
  templateUrl: './app.component.html', //donde renderiza el html
  styleUrl: './app.component.css' //donde renderiza el css
})
export class AppComponent implements OnInit {
  title = 'Angular 17 App';
  city = 'Quito';

  ngOnInit() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn?.addEventListener('click', this.toggleDarkMode);
  }

  toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
  }

}
