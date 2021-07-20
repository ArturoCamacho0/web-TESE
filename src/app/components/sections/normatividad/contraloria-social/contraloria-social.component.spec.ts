import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraloriaSocialComponent } from './contraloria-social.component';

describe('ContraloriaSocialComponent', () => {
  let component: ContraloriaSocialComponent;
  let fixture: ComponentFixture<ContraloriaSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraloriaSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraloriaSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
