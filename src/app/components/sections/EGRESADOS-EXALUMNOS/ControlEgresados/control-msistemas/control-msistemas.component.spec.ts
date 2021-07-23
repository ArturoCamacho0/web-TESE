import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMsistemasComponent } from './control-msistemas.component';

describe('ControlMsistemasComponent', () => {
  let component: ControlMsistemasComponent;
  let fixture: ComponentFixture<ControlMsistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMsistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMsistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
