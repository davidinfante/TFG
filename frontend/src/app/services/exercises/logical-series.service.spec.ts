import { TestBed } from '@angular/core/testing';

import { LogicalSeriesService } from './logical-series.service';

describe('LogicalSeriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogicalSeriesService = TestBed.get(LogicalSeriesService);
    expect(service).toBeTruthy();
  });
});
