import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicaComponent } from './mecanica.component';

describe('MecanicaComponent', () => {
  let component: MecanicaComponent;
  let fixture: ComponentFixture<MecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
