import { TestBed } from '@angular/core/testing';

import { MgestionService } from './mgestion.service';

describe('MgestionService', () => {
  let service: MgestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
