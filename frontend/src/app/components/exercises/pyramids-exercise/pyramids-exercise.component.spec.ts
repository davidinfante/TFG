import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PyramidsExerciseComponent } from './pyramids-exercise.component';
import {PyramidsService} from '../../../services/exercises/pyramids.service';

describe('PyramidsExerciseComponent', () => {
  let component: PyramidsExerciseComponent;
  let fixture: ComponentFixture<PyramidsExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidsExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [PyramidsService]
    }).compileComponents();

    fixture = TestBed.createComponent(PyramidsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
