import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaComponent } from './quimica.component';

describe('QuimicaComponent', () => {
  let component: QuimicaComponent;
  let fixture: ComponentFixture<QuimicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuimicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
