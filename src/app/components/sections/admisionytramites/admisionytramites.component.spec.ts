import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionytramitesComponent } from './admisionytramites.component';

describe('AdmisionytramitesComponent', () => {
  let component: AdmisionytramitesComponent;
  let fixture: ComponentFixture<AdmisionytramitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisionytramitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionytramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
