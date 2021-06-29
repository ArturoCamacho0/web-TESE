import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMeficienciaComponent } from './pagina-meficiencia.component';

describe('PaginaMeficienciaComponent', () => {
  let component: PaginaMeficienciaComponent;
  let fixture: ComponentFixture<PaginaMeficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMeficienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMeficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
