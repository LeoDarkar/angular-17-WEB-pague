import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundaHojaComponent } from './segunda-hoja.component';

describe('SegundaHojaComponent', () => {
  let component: SegundaHojaComponent;
  let fixture: ComponentFixture<SegundaHojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundaHojaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundaHojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
