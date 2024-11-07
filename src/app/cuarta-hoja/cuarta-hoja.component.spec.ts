import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartaHojaComponent } from './cuarta-hoja.component';

describe('CuartaHojaComponent', () => {
  let component: CuartaHojaComponent;
  let fixture: ComponentFixture<CuartaHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuartaHojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuartaHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
