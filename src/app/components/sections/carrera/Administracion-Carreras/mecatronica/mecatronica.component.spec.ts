import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecatronicaComponent } from './mecatronica.component';

describe('MecatronicaComponent', () => {
  let component: MecatronicaComponent;
  let fixture: ComponentFixture<MecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
