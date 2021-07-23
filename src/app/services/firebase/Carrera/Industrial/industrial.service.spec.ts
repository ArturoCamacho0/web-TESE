import { IndustrialService } from './industrial.service';
import { TestBed } from '@angular/core/testing';


describe('IndustrialService', () => {
  let service: IndustrialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustrialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
