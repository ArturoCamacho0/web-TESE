import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPComponent } from './banner-p.component';

describe('BannerPComponent', () => {
  let component: BannerPComponent;
  let fixture: ComponentFixture<BannerPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
