import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoBioquimicaComponent } from './cuerpo-bioquimica.component';

describe('CuerpoBioquimicaComponent', () => {
  let component: CuerpoBioquimicaComponent;
  let fixture: ComponentFixture<CuerpoBioquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoBioquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoBioquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
