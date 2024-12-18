import { Component, OnInit } from '@angular/core';
import { ProvinciasEcService } from '../../../core/services/provincias-ec.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CorreoService } from '../../../core/services/correo.service';

@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export default class Section3Component implements OnInit {
  provincias: any[] = [];
  datos:FormGroup; 

  constructor(private provinciaService: ProvinciasEcService, // Inyecta el servicio de provincias 
              private fb: FormBuilder, 
              private httpclient: HttpClient,
              private correoService: CorreoService // Inyecta el servicio correo
            ) {
              this.datos = this.fb.group({
                nombre: [''],
                apellido: [''],
                email: [''],
                numeroTelefono: [''],
                provincia: [''],
                ciudad: [''],
                direccion: [''],
                asunto: [''],
              });

  }

  ngOnInit(): void {
    this.provinciaService.getProvinciasList().subscribe(data => {
      this.provincias = data;
    });
  }

  onSubmit() {
    this.correoService.enviarCorreo(this.datos.value).subscribe((data) => {
      console.log(data);
  });
  }
}

