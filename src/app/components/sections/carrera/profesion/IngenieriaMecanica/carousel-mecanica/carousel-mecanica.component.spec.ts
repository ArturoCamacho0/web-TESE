import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMecanicaComponent } from './carousel-mecanica.component';

describe('CarouselMecanicaComponent', () => {
  let component: CarouselMecanicaComponent;
  let fixture: ComponentFixture<CarouselMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMecanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
