import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeActividadesComponent } from './informe-actividades.component';

describe('InformeActividadesComponent', () => {
  let component: InformeActividadesComponent;
  let fixture: ComponentFixture<InformeActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
