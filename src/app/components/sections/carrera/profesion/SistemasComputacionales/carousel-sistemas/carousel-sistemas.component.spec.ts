import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSistemasComponent } from './carousel-sistemas.component';

describe('CarouselSistemasComponent', () => {
  let component: CarouselSistemasComponent;
  let fixture: ComponentFixture<CarouselSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
