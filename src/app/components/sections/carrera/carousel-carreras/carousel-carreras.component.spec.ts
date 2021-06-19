import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCarrerasComponent } from './carousel-carreras.component';

describe('CarouselCarrerasComponent', () => {
  let component: CarouselCarrerasComponent;
  let fixture: ComponentFixture<CarouselCarrerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCarrerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
