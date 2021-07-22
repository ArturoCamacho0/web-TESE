import { MecanicaService } from './mecanica.service';
import { TestBed } from '@angular/core/testing';


describe('MecanicaService', () => {
  let service: MecanicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecanicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
