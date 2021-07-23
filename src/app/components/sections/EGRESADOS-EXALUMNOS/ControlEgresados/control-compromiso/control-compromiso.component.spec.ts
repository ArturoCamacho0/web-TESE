import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlCompromisoComponent } from './control-compromiso.component';

describe('ControlCompromisoComponent', () => {
  let component: ControlCompromisoComponent;
  let fixture: ComponentFixture<ControlCompromisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlCompromisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
