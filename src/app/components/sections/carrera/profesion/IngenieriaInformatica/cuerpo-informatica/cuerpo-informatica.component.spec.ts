import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoInformaticaComponent } from './cuerpo-informatica.component';

describe('CuerpoInformaticaComponent', () => {
  let component: CuerpoInformaticaComponent;
  let fixture: ComponentFixture<CuerpoInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoInformaticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
