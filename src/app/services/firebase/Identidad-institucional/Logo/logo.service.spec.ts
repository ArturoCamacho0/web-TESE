import { TestBed } from '@angular/core/testing';

import { LogoService } from './logo.service';

describe('LogoService', () => {
  let service: LogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
