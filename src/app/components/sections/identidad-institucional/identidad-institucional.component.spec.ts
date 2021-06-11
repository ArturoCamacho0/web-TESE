import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentidadInstitucionalComponent } from './identidad-institucional.component';

describe('IdentidadInstitucionalComponent', () => {
  let component: IdentidadInstitucionalComponent;
  let fixture: ComponentFixture<IdentidadInstitucionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentidadInstitucionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentidadInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
