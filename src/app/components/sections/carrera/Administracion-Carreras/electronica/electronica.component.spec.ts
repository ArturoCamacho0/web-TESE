import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaComponent } from './electronica.component';

describe('ElectronicaComponent', () => {
  let component: ElectronicaComponent;
  let fixture: ComponentFixture<ElectronicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
