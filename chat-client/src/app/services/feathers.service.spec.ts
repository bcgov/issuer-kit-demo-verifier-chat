import { TestBed } from '@angular/core/testing';

import { FeathersService } from './feathers.service';

describe('FeathersService', () => {
  let service: FeathersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeathersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
