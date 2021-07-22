import { InformaticaService } from './informatica.service';
import { TestBed } from '@angular/core/testing';


describe('InformaticaService', () => {
  let service: InformaticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformaticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
