import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PositionsExerciseComponent } from './positions-exercise.component';
import {PositionsExerciseService} from '../../../services/exercises/positions-exercise.service';

describe('PositionsExerciseComponent', () => {
  let component: PositionsExerciseComponent;
  let fixture: ComponentFixture<PositionsExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionsExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [PositionsExerciseService]
    }).compileComponents();

    fixture = TestBed.createComponent(PositionsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
