import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuintaHojaComponent } from './quinta-hoja.component';

describe('QuintaHojaComponent', () => {
  let component: QuintaHojaComponent;
  let fixture: ComponentFixture<QuintaHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuintaHojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuintaHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
