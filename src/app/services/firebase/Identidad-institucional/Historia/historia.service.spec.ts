import { TestBed } from '@angular/core/testing';

import { HistoriaService } from './historia.service';

describe('HistoriaService', () => {
  let service: HistoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
