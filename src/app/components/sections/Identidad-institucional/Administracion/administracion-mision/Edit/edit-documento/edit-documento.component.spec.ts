import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentoComponent } from './edit-documento.component';

describe('EditDocumentoComponent', () => {
  let component: EditDocumentoComponent;
  let fixture: ComponentFixture<EditDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
