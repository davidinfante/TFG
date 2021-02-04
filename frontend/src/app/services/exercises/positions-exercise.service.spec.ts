import { TestBed } from '@angular/core/testing';

import { PositionsExerciseService } from './positions-exercise.service';

describe('PositionsExerciseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PositionsExerciseService = TestBed.get(PositionsExerciseService);
    expect(service).toBeTruthy();
  });
});
