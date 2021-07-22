import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionHistoriaComponent } from './administracion-historia.component';

describe('AdministracionHistoriaComponent', () => {
  let component: AdministracionHistoriaComponent;
  let fixture: ComponentFixture<AdministracionHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
