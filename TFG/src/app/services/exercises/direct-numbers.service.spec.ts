import { TestBed } from '@angular/core/testing';

import { DirectNumbersService } from './direct-numbers.service';

describe('DirectNumbersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DirectNumbersService = TestBed.get(DirectNumbersService);
    expect(service).toBeTruthy();
  });
});
