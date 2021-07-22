import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraPrincipalComponent } from './carrera-principal.component';

describe('CarreraPrincipalComponent', () => {
  let component: CarreraPrincipalComponent;
  let fixture: ComponentFixture<CarreraPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreraPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreraPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
