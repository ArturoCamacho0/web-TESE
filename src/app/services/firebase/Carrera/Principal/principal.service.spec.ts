import { TestBed } from '@angular/core/testing';

import { PrincipalService } from './principal.service';

describe('PrincipalService', () => {
  let service: PrincipalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrincipalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
