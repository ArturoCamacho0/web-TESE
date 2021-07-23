import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitulacionComponent } from './titulacion.component';

describe('TitulacionComponent', () => {
  let component: TitulacionComponent;
  let fixture: ComponentFixture<TitulacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitulacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitulacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
