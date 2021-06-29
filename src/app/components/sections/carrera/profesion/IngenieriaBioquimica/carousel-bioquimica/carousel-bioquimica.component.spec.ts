import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBioquimicaComponent } from './carousel-bioquimica.component';

describe('CarouselBioquimicaComponent', () => {
  let component: CarouselBioquimicaComponent;
  let fixture: ComponentFixture<CarouselBioquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselBioquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselBioquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
