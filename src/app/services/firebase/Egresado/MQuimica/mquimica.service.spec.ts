import { TestBed } from '@angular/core/testing';

import { MquimicaService } from './mquimica.service';

describe('MquimicaService', () => {
  let service: MquimicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MquimicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
