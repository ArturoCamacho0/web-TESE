import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaContenidoComponent } from './plantilla-contenido.component';

describe('PlantillaContenidoComponent', () => {
  let component: PlantillaContenidoComponent;
  let fixture: ComponentFixture<PlantillaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantillaContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
