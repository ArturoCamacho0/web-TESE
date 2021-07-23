import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMbioquimicaComponent } from './control-mbioquimica.component';

describe('ControlMbioquimicaComponent', () => {
  let component: ControlMbioquimicaComponent;
  let fixture: ComponentFixture<ControlMbioquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMbioquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMbioquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
