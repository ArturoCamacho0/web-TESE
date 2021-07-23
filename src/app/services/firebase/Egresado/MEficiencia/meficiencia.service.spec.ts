import { TestBed } from '@angular/core/testing';

import { MeficienciaService } from './meficiencia.service';

describe('MeficienciaService', () => {
  let service: MeficienciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeficienciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
