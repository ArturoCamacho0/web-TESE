import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMquimicaComponent } from './control-mquimica.component';

describe('ControlMquimicaComponent', () => {
  let component: ControlMquimicaComponent;
  let fixture: ComponentFixture<ControlMquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
