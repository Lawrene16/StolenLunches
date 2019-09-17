import { TestBed } from '@angular/core/testing';

import { StolenlunchService } from './stolenlunch.service';

describe('StolenlunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StolenlunchService = TestBed.get(StolenlunchService);
    expect(service).toBeTruthy();
  });
});
