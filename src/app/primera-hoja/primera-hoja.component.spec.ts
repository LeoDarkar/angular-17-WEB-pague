import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraHojaComponent } from './primera-hoja.component';

describe('PrimeraHojaComponent', () => {
  let component: PrimeraHojaComponent;
  let fixture: ComponentFixture<PrimeraHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraHojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
