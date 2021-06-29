import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMbioquimicaComponent } from './banner-mbioquimica.component';

describe('BannerMbioquimicaComponent', () => {
  let component: BannerMbioquimicaComponent;
  let fixture: ComponentFixture<BannerMbioquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerMbioquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMbioquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
