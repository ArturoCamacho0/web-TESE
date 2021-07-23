import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlVinculacionComponent } from './control-vinculacion.component';

describe('ControlVinculacionComponent', () => {
  let component: ControlVinculacionComponent;
  let fixture: ComponentFixture<ControlVinculacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlVinculacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlVinculacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
