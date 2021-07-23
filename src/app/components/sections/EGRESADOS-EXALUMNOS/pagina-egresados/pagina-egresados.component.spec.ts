import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEgresadosComponent } from './pagina-egresados.component';

describe('PaginaEgresadosComponent', () => {
  let component: PaginaEgresadosComponent;
  let fixture: ComponentFixture<PaginaEgresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaEgresadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
