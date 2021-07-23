import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionInscripcionComponent } from './administracion-inscripcion.component';

describe('AdministracionInscripcionComponent', () => {
  let component: AdministracionInscripcionComponent;
  let fixture: ComponentFixture<AdministracionInscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionInscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
