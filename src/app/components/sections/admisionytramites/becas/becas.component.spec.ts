import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecasComponent } from './becas.component';

describe('BecasComponent', () => {
  let component: BecasComponent;
  let fixture: ComponentFixture<BecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
