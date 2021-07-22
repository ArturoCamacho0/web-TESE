import { TestBed } from '@angular/core/testing';

import { VinculacionService } from './vinculacion.service';

describe('VinculacionService', () => {
  let service: VinculacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinculacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
