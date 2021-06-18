import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMquimicaComponent } from './banner-mquimica.component';

describe('BannerMquimicaComponent', () => {
  let component: BannerMquimicaComponent;
  let fixture: ComponentFixture<BannerMquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
