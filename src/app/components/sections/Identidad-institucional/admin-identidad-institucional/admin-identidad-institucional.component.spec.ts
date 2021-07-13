import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIdentidadInstitucionalComponent } from './admin-identidad-institucional.component';

describe('AdminIdentidadInstitucionalComponent', () => {
  let component: AdminIdentidadInstitucionalComponent;
  let fixture: ComponentFixture<AdminIdentidadInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIdentidadInstitucionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIdentidadInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
