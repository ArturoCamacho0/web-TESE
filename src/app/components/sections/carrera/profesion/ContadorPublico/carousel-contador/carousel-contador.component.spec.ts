import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContadorComponent } from './carousel-contador.component';

describe('CarouselContadorComponent', () => {
  let component: CarouselContadorComponent;
  let fixture: ComponentFixture<CarouselContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
