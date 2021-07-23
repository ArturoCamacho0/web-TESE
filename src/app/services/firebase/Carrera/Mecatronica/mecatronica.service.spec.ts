import { MecatronicaService } from './mecatronica.service';
import { TestBed } from '@angular/core/testing';


describe('MecatronicaService', () => {
  let service: MecatronicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecatronicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
