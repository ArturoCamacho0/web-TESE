import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoSistemasComponent } from './cuerpo-sistemas.component';

describe('CuerpoSistemasComponent', () => {
  let component: CuerpoSistemasComponent;
  let fixture: ComponentFixture<CuerpoSistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoSistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoSistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
