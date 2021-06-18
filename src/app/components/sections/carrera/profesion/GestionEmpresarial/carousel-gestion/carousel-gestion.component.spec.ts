import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselGestionComponent } from './carousel-gestion.component';

describe('CarouselGestionComponent', () => {
  let component: CarouselGestionComponent;
  let fixture: ComponentFixture<CarouselGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
