import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaIntegralComponent } from './politica-integral.component';

describe('PoliticaIntegralComponent', () => {
  let component: PoliticaIntegralComponent;
  let fixture: ComponentFixture<PoliticaIntegralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticaIntegralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticaIntegralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
