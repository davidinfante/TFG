import { TestBed } from '@angular/core/testing';

import { ExerciseResultsService } from './exercise-results.service';

describe('ExerciseResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExerciseResultsService = TestBed.get(ExerciseResultsService);
    expect(service).toBeTruthy();
  });
});
