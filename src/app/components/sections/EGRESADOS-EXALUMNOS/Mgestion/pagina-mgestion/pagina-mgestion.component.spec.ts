import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMgestionComponent } from './pagina-mgestion.component';

describe('PaginaMgestionComponent', () => {
  let component: PaginaMgestionComponent;
  let fixture: ComponentFixture<PaginaMgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMgestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
