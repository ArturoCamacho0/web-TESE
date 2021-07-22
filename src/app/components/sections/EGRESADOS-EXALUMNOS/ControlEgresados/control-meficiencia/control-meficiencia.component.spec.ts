import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMeficienciaComponent } from './control-meficiencia.component';

describe('ControlMeficienciaComponent', () => {
  let component: ControlMeficienciaComponent;
  let fixture: ComponentFixture<ControlMeficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMeficienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMeficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
