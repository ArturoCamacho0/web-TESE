import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselIndustrialComponent } from './carousel-industrial.component';

describe('CarouselIndustrialComponent', () => {
  let component: CarouselIndustrialComponent;
  let fixture: ComponentFixture<CarouselIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
