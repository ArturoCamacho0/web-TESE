import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemasComputacionalesComponent } from './sistemas-computacionales.component';

describe('SistemasComputacionalesComponent', () => {
  let component: SistemasComputacionalesComponent;
  let fixture: ComponentFixture<SistemasComputacionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SistemasComputacionalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemasComputacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
