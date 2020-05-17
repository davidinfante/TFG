import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SemanticSeriesExerciseComponent } from './semantic-series-exercise.component';
import {SemanticSeriesService} from '../../../services/exercises/semantic-series.service';

describe('SemanticSeriesExerciseComponent', () => {
  let component: SemanticSeriesExerciseComponent;
  let fixture: ComponentFixture<SemanticSeriesExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticSeriesExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [SemanticSeriesService]
    }).compileComponents();

    fixture = TestBed.createComponent(SemanticSeriesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
