import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlEgresadosComponent } from './control-egresados.component';

describe('ControlEgresadosComponent', () => {
  let component: ControlEgresadosComponent;
  let fixture: ComponentFixture<ControlEgresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlEgresadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
