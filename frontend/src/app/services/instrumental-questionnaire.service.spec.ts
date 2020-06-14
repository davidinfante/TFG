import { TestBed } from '@angular/core/testing';

import { InstrumentalQuestionnaireService } from './instrumental-questionnaire.service';

describe('InstrumentalQuestionnaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstrumentalQuestionnaireService = TestBed.get(InstrumentalQuestionnaireService);
    expect(service).toBeTruthy();
  });
});
