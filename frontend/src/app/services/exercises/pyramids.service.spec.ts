import { TestBed } from '@angular/core/testing';

import { PyramidsService } from './pyramids.service';

describe('PyramidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PyramidsService = TestBed.get(PyramidsService);
    expect(service).toBeTruthy();
  });
});
