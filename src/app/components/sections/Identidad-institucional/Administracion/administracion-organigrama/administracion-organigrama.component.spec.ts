import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionOrganigramaComponent } from './administracion-organigrama.component';

describe('AdministracionOrganigramaComponent', () => {
  let component: AdministracionOrganigramaComponent;
  let fixture: ComponentFixture<AdministracionOrganigramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionOrganigramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionOrganigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
