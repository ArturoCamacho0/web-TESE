import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCarreraComponent } from './edit-carrera.component';

describe('EditCarreraComponent', () => {
  let component: EditCarreraComponent;
  let fixture: ComponentFixture<EditCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCarreraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
