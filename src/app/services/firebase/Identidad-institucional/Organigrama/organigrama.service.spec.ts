import { TestBed } from '@angular/core/testing';

import { OrganigramaService } from './organigrama.service';

describe('OrganigramaService', () => {
  let service: OrganigramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganigramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
