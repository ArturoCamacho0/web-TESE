import { TestBed } from '@angular/core/testing';

import { MisionService } from './mision.service';

describe('MisionService', () => {
  let service: MisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
