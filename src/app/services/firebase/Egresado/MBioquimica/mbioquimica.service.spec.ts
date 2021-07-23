import { TestBed } from '@angular/core/testing';

import { MbioquimicaService } from './mbioquimica.service';

describe('MbioquimicaService', () => {
  let service: MbioquimicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MbioquimicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
