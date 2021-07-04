import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMmecatronicaComponent } from './banner-mmecatronica.component';

describe('BannerMmecatronicaComponent', () => {
  let component: BannerMmecatronicaComponent;
  let fixture: ComponentFixture<BannerMmecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMmecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMmecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
