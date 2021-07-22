import { TestBed } from '@angular/core/testing';

import { ActividadesCredencialesService } from './actividades-credenciales.service';

describe('ActividadesCredencialesService', () => {
  let service: ActividadesCredencialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActividadesCredencialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
