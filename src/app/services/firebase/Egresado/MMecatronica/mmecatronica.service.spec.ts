import { TestBed } from '@angular/core/testing';

import { MmecatronicaService } from './mmecatronica.service';

describe('MmecatronicaService', () => {
  let service: MmecatronicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmecatronicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
