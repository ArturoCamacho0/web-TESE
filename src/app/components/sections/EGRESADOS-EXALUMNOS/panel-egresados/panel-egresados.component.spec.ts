import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEgresadosComponent } from './panel-egresados.component';

describe('PanelEgresadosComponent', () => {
  let component: PanelEgresadosComponent;
  let fixture: ComponentFixture<PanelEgresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelEgresadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEgresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
