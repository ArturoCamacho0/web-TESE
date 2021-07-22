import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLogoComponent } from './img-logo.component';

describe('ImgLogoComponent', () => {
  let component: ImgLogoComponent;
  let fixture: ComponentFixture<ImgLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
