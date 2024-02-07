import { TestBed } from '@angular/core/testing';

import { PhoenixHttpClientService } from './phoenix-http-client.service';

describe('PhoenixHttpClientService', () => {
  let service: PhoenixHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoenixHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
