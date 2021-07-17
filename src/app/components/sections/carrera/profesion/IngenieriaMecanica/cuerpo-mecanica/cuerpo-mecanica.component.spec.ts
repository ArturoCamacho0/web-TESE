import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoMecanicaComponent } from './cuerpo-mecanica.component';

describe('CuerpoMecanicaComponent', () => {
  let component: CuerpoMecanicaComponent;
  let fixture: ComponentFixture<CuerpoMecanicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoMecanicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoMecanicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
