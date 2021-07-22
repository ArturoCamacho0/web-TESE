import { TestBed } from '@angular/core/testing';

import { MsistemasService } from './msistemas.service';

describe('MsistemasService', () => {
  let service: MsistemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsistemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
