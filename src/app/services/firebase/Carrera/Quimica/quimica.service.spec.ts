import { QuimicaService } from './quimica.service';
import { TestBed } from '@angular/core/testing';


describe('QuimicaService', () => {
  let service: QuimicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuimicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
