import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialComponent } from './industrial.component';

describe('IndustrialComponent', () => {
  let component: IndustrialComponent;
  let fixture: ComponentFixture<IndustrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
