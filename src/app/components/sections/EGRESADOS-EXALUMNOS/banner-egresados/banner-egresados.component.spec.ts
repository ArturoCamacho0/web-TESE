import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEgresadosComponent } from './banner-egresados.component';

describe('BannerEgresadosComponent', () => {
  let component: BannerEgresadosComponent;
  let fixture: ComponentFixture<BannerEgresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEgresadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
