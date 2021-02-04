import { TestBed } from '@angular/core/testing';

import { MedalsService } from './medals.service';

describe('MedalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedalsService = TestBed.get(MedalsService);
    expect(service).toBeTruthy();
  });
});
