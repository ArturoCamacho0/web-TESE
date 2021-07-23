import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMmecatronicaComponent } from './control-mmecatronica.component';

describe('ControlMmecatronicaComponent', () => {
  let component: ControlMmecatronicaComponent;
  let fixture: ComponentFixture<ControlMmecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMmecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMmecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
