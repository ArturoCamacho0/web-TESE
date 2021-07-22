import { ElectronicaService } from './electronica.service';
import { TestBed } from '@angular/core/testing';

describe('ElectronicaService', () => {
  let service: ElectronicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
