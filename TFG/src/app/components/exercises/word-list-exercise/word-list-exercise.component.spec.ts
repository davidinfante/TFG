import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WordListExerciseComponent } from './word-list-exercise.component';
import {WordListService} from '../../../services/exercises/word-list.service';
import {FunctionsService} from '../../../services/functions.service';

describe('WordListExerciseComponent', () => {
  let component: WordListExerciseComponent;
  let fixture: ComponentFixture<WordListExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordListExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [WordListService, FunctionsService]
    }).compileComponents();

    fixture = TestBed.createComponent(WordListExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
