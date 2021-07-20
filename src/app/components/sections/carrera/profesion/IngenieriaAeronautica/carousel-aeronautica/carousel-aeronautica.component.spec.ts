import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAeronauticaComponent } from './carousel-aeronautica.component';

describe('CarouselAeronauticaComponent', () => {
  let component: CarouselAeronauticaComponent;
  let fixture: ComponentFixture<CarouselAeronauticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAeronauticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAeronauticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
