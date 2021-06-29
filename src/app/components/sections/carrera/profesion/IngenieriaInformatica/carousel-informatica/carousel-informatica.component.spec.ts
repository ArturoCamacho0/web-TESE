import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInformaticaComponent } from './carousel-informatica.component';

describe('CarouselInformaticaComponent', () => {
  let component: CarouselInformaticaComponent;
  let fixture: ComponentFixture<CarouselInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselInformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
