import { TestBed } from '@angular/core/testing';

import { CompromisoService } from './compromiso.service';

describe('CompromisoService', () => {
  let service: CompromisoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompromisoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
