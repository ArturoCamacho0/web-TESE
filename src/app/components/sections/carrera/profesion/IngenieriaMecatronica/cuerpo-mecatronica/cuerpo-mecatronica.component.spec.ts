import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoMecatronicaComponent } from './cuerpo-mecatronica.component';

describe('CuerpoMecatronicaComponent', () => {
  let component: CuerpoMecatronicaComponent;
  let fixture: ComponentFixture<CuerpoMecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoMecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoMecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
