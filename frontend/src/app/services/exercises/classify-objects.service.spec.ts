import { TestBed } from '@angular/core/testing';

import { ClassifyObjectsService } from './classify-objects.service';

describe('ClassifyObjectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassifyObjectsService = TestBed.get(ClassifyObjectsService);
    expect(service).toBeTruthy();
  });
});
