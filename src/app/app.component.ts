import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html', //donde renderiza el html
  styleUrl: './app.component.css' //donde renderiza el css
})
export class AppComponent {
  title = 'angular-17-app';
  city = 'Quito';
}
