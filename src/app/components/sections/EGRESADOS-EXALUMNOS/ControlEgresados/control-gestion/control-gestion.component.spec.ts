import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlGestionComponent } from './control-gestion.component';

describe('ControlGestionComponent', () => {
  let component: ControlGestionComponent;
  let fixture: ComponentFixture<ControlGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
