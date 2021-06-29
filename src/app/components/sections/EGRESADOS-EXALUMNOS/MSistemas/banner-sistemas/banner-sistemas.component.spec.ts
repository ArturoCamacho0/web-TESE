import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSistemasComponent } from './banner-sistemas.component';

describe('BannerSistemasComponent', () => {
  let component: BannerSistemasComponent;
  let fixture: ComponentFixture<BannerSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
