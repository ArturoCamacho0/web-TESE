import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselQuimicaComponent } from './carousel-quimica.component';

describe('CarouselQuimicaComponent', () => {
  let component: CarouselQuimicaComponent;
  let fixture: ComponentFixture<CarouselQuimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselQuimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselQuimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
