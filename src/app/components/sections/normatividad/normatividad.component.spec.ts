import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormatividadComponent } from './normatividad.component';

describe('NormatividadComponent', () => {
  let component: NormatividadComponent;
  let fixture: ComponentFixture<NormatividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormatividadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormatividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
