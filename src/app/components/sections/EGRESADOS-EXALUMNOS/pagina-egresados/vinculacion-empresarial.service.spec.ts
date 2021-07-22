import { TestBed } from '@angular/core/testing';

import { VinculacionEmpresarialService } from './vinculacion-empresarial.service';

describe('VinculacionEmpresarialService', () => {
  let service: VinculacionEmpresarialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VinculacionEmpresarialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
