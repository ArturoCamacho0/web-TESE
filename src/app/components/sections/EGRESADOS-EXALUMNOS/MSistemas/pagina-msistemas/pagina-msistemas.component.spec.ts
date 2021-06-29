import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMsistemasComponent } from './pagina-msistemas.component';

describe('PaginaMsistemasComponent', () => {
  let component: PaginaMsistemasComponent;
  let fixture: ComponentFixture<PaginaMsistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaMsistemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaMsistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
