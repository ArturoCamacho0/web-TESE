import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosocialComponent } from './serviciosocial.component';

describe('ServiciosocialComponent', () => {
  let component: ServiciosocialComponent;
  let fixture: ComponentFixture<ServiciosocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
