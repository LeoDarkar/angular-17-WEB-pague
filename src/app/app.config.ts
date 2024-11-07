import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SegundaHojaComponent } from './segunda-hoja/segunda-hoja.component'; // Importa el componente

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),     SegundaHojaComponent // Añade el componente aquí
  ]
};
