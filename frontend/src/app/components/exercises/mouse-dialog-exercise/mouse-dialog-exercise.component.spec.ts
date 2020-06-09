import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MouseDialogExerciseComponent } from './mouse-dialog-exercise.component';
import {FunctionsService} from '../../../services/functions.service';

describe('MouseDialogExerciseComponent', () => {
  let component: MouseDialogExerciseComponent;
  let fixture: ComponentFixture<MouseDialogExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDialogExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [FunctionsService]
    }).compileComponents();

    fixture = TestBed.createComponent(MouseDialogExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
