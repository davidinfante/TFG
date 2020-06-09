import { TestBed } from '@angular/core/testing';

import { SemanticSeriesService } from './semantic-series.service';

describe('SemanticSeriesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SemanticSeriesService = TestBed.get(SemanticSeriesService);
    expect(service).toBeTruthy();
  });
});
