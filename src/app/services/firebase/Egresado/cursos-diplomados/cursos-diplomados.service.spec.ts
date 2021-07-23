import { TestBed } from '@angular/core/testing';

import { CursosDiplomadosService } from './cursos-diplomados.service';

describe('CursosDiplomadosService', () => {
  let service: CursosDiplomadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosDiplomadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
