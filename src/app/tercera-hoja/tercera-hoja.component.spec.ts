import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraHojaComponent } from './tercera-hoja.component';

describe('TerceraHojaComponent', () => {
  let component: TerceraHojaComponent;
  let fixture: ComponentFixture<TerceraHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceraHojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceraHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
