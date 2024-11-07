import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Componente2Component } from './componente-2/componente-2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Componente2Component],
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
