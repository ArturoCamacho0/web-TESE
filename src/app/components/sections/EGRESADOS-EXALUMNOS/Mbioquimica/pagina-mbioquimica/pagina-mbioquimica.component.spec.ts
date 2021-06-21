import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMbioquimicaComponent } from './pagina-mbioquimica.component';

describe('PaginaMbioquimicaComponent', () => {
  let component: PaginaMbioquimicaComponent;
  let fixture: ComponentFixture<PaginaMbioquimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMbioquimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMbioquimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
