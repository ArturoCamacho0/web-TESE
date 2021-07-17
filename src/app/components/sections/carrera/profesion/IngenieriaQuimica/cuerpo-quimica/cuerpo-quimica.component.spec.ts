import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoQuimicaComponent } from './cuerpo-quimica.component';

describe('CuerpoQuimicaComponent', () => {
  let component: CuerpoQuimicaComponent;
  let fixture: ComponentFixture<CuerpoQuimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoQuimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoQuimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
