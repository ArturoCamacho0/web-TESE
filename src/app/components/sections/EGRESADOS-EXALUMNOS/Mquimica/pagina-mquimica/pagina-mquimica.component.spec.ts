import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMquimicaComponent } from './pagina-mquimica.component';

describe('PaginaMquimicaComponent', () => {
  let component: PaginaMquimicaComponent;
  let fixture: ComponentFixture<PaginaMquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
