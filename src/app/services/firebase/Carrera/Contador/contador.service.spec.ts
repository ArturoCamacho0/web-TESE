import { ContadorService } from './contador.service';
import { TestBed } from '@angular/core/testing';


describe('ContadorService', () => {
  let service: ContadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
