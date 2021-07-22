import { BioquimicaService } from './bioquimica.service';
import { TestBed } from '@angular/core/testing';


describe('BioquimicaService', () => {
  let service: BioquimicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BioquimicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
