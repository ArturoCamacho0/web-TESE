import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompromisoComponent } from './admin-compromiso.component';

describe('AdminCompromisoComponent', () => {
  let component: AdminCompromisoComponent;
  let fixture: ComponentFixture<AdminCompromisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCompromisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
