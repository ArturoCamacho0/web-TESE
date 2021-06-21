import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioEscolarComponent } from './calendario-escolar.component';

describe('CalendarioEscolarComponent', () => {
  let component: CalendarioEscolarComponent;
  let fixture: ComponentFixture<CalendarioEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioEscolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
