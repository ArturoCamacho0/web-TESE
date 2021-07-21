import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgranigramaComponent } from './edit-orgranigrama.component';

describe('EditOrgranigramaComponent', () => {
  let component: EditOrgranigramaComponent;
  let fixture: ComponentFixture<EditOrgranigramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrgranigramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrgranigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
