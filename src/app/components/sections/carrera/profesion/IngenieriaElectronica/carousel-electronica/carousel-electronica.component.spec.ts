import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselElectronicaComponent } from './carousel-electronica.component';

describe('CarouselElectronicaComponent', () => {
  let component: CarouselElectronicaComponent;
  let fixture: ComponentFixture<CarouselElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselElectronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
