import { TestBed } from '@angular/core/testing';

import { ReinscripcionService } from './reinscripcion.service';

describe('ReinscripcionService', () => {
  let service: ReinscripcionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReinscripcionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
