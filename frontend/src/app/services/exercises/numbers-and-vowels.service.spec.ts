import { TestBed } from '@angular/core/testing';

import { NumbersAndVowelsService } from './numbers-and-vowels.service';

describe('NumbersAndVowelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersAndVowelsService = TestBed.get(NumbersAndVowelsService);
    expect(service).toBeTruthy();
  });
});
