import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogicalSeriesExerciseComponent } from './logical-series-exercise.component';
import {LogicalSeriesService} from '../../../services/exercises/logical-series.service';

describe('LogicalSeriesExerciseComponent', () => {
  let component: LogicalSeriesExerciseComponent;
  let fixture: ComponentFixture<LogicalSeriesExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicalSeriesExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [LogicalSeriesService]
    }).compileComponents();

    fixture = TestBed.createComponent(LogicalSeriesExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
