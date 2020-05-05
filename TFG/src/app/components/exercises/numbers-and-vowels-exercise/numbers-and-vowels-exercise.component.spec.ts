import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NumbersAndVowelsExerciseComponent } from './numbers-and-vowels-exercise.component';

describe('NumbersAndVowelsExerciseComponent', () => {
  let component: NumbersAndVowelsExerciseComponent;
  let fixture: ComponentFixture<NumbersAndVowelsExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersAndVowelsExerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NumbersAndVowelsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
