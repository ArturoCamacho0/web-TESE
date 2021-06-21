import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoElectronicaComponent } from './cuerpo-electronica.component';

describe('CuerpoElectronicaComponent', () => {
  let component: CuerpoElectronicaComponent;
  let fixture: ComponentFixture<CuerpoElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoElectronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
