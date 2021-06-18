import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoAeronauticaComponent } from './cuerpo-aeronautica.component';

describe('CuerpoAeronauticaComponent', () => {
  let component: CuerpoAeronauticaComponent;
  let fixture: ComponentFixture<CuerpoAeronauticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoAeronauticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoAeronauticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
