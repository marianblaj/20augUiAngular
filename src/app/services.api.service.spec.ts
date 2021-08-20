import { TestBed } from '@angular/core/testing';

import { Services.ApiService } from './services.api.service';

describe('Services.ApiService', () => {
  let service: Services.ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services.ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
