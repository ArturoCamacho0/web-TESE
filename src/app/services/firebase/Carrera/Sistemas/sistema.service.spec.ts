import { SistemasService } from './sistema.service';
import { TestBed } from '@angular/core/testing';


describe('SistemasService', () => {
  let service: SistemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SistemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
