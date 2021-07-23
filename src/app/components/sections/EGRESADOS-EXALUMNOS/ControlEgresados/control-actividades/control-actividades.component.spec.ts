import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlActividadesComponent } from './control-actividades.component';

describe('ControlActividadesComponent', () => {
  let component: ControlActividadesComponent;
  let fixture: ComponentFixture<ControlActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
