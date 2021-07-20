import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoIndustrialComponent } from './cuerpo-industrial.component';

describe('CuerpoIndustrialComponent', () => {
  let component: CuerpoIndustrialComponent;
  let fixture: ComponentFixture<CuerpoIndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoIndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
