import { Component } from '@angular/core';
import { ProvinciasEcService } from '../../../core/services/provincias-ec.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export default class Section3Component {
  provincias: any[] = [];

  constructor(private provinciaService: ProvinciasEcService) { }

  ngOnInit(): void {
    this.provinciaService.getProvinciasList().subscribe(data => {
      this.provincias = data;
    });
  }
}
