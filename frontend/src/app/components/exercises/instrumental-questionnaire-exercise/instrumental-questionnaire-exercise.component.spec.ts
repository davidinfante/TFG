import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstrumentalQuestionnaireExerciseComponent } from './instrumental-questionnaire-exercise.component';

describe('InstrumentalQuestionnaireExerciseComponent', () => {
  let component: InstrumentalQuestionnaireExerciseComponent;
  let fixture: ComponentFixture<InstrumentalQuestionnaireExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentalQuestionnaireExerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentalQuestionnaireExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
