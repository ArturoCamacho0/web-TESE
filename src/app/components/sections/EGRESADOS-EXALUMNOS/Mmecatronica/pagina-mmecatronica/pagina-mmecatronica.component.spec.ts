import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMmecatronicaComponent } from './pagina-mmecatronica.component';

describe('PaginaMmecatronicaComponent', () => {
  let component: PaginaMmecatronicaComponent;
  let fixture: ComponentFixture<PaginaMmecatronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMmecatronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMmecatronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
