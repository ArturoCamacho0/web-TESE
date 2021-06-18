import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoGestionComponent } from './cuerpo-gestion.component';

describe('CuerpoGestionComponent', () => {
  let component: CuerpoGestionComponent;
  let fixture: ComponentFixture<CuerpoGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
