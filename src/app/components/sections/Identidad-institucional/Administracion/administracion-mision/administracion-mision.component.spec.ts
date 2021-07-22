import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionMisionComponent } from './administracion-mision.component';

describe('AdministracionMisionComponent', () => {
  let component: AdministracionMisionComponent;
  let fixture: ComponentFixture<AdministracionMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
