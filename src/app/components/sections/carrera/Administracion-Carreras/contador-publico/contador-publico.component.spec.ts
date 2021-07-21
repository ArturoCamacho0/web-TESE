import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorPublicoComponent } from './contador-publico.component';

describe('ContadorPublicoComponent', () => {
  let component: ContadorPublicoComponent;
  let fixture: ComponentFixture<ContadorPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorPublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadorPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
