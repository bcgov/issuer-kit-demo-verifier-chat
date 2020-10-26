import { TestBed } from '@angular/core/testing';

import { OidcConfigService } from './oidc-config.service';

describe('OidcConfigService', () => {
  let service: OidcConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidcConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
