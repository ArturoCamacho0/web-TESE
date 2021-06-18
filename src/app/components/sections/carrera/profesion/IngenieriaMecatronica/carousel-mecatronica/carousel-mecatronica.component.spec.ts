import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMecatronicaComponent } from './carousel-mecatronica.component';

describe('CarouselMecatronicaComponent', () => {
  let component: CarouselMecatronicaComponent;
  let fixture: ComponentFixture<CarouselMecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselMecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselMecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
