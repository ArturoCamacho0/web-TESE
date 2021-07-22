import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEmpresarialComponent } from './gestion-empresarial.component';

describe('GestionEmpresarialComponent', () => {
  let component: GestionEmpresarialComponent;
  let fixture: ComponentFixture<GestionEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
