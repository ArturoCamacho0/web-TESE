import { AeronauticaService } from './aeronautica.service';
import { TestBed } from '@angular/core/testing';


describe('AeronauticaService', () => {
  let service: AeronauticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AeronauticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
