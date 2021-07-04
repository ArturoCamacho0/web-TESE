import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMeficienciaComponent } from './banner-meficiencia.component';

describe('BannerMeficienciaComponent', () => {
  let component: BannerMeficienciaComponent;
  let fixture: ComponentFixture<BannerMeficienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMeficienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMeficienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
