import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionLogoComponent } from './administracion-logo.component';

describe('AdministracionLogoComponent', () => {
  let component: AdministracionLogoComponent;
  let fixture: ComponentFixture<AdministracionLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
