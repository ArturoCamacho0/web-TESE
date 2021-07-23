import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHistorialComponent } from './control-historial.component';

describe('ControlHistorialComponent', () => {
  let component: ControlHistorialComponent;
  let fixture: ComponentFixture<ControlHistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlHistorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
