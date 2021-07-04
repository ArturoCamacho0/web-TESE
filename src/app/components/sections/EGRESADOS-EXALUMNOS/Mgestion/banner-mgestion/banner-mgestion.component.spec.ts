import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMgestionComponent } from './banner-mgestion.component';

describe('BannerMgestionComponent', () => {
  let component: BannerMgestionComponent;
  let fixture: ComponentFixture<BannerMgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMgestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
