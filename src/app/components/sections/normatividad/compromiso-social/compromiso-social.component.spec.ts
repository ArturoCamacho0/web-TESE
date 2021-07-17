import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromisoSocialComponent } from './compromiso-social.component';

describe('CompromisoSocialComponent', () => {
  let component: CompromisoSocialComponent;
  let fixture: ComponentFixture<CompromisoSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompromisoSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromisoSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
