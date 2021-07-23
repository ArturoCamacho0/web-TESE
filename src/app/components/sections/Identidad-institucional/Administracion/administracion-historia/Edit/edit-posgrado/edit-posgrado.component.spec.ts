import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPosgradoComponent } from './edit-posgrado.component';

describe('EditPosgradoComponent', () => {
  let component: EditPosgradoComponent;
  let fixture: ComponentFixture<EditPosgradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPosgradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPosgradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
