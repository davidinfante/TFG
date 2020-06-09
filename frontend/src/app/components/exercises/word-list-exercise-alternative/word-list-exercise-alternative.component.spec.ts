import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordListExerciseAlternativeComponent } from './word-list-exercise-alternative.component';
import {WordListService} from '../../../services/exercises/word-list.service';
import {FunctionsService} from '../../../services/functions.service';

describe('WordListExerciseAlternativeComponent', () => {
  let component: WordListExerciseAlternativeComponent;
  let fixture: ComponentFixture<WordListExerciseAlternativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListExerciseAlternativeComponent ],
      imports: [IonicModule.forRoot()],
      providers: [WordListService, FunctionsService]
    }).compileComponents();

    fixture = TestBed.createComponent(WordListExerciseAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
