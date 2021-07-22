import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionReinscripcionComponent } from './administracion-reinscripcion.component';

describe('AdministracionReinscripcionComponent', () => {
  let component: AdministracionReinscripcionComponent;
  let fixture: ComponentFixture<AdministracionReinscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionReinscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionReinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
