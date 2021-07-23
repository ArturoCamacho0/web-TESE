import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoContadorComponent } from './cuerpo-contador.component';

describe('CuerpoContadorComponent', () => {
  let component: CuerpoContadorComponent;
  let fixture: ComponentFixture<CuerpoContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
