import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MouseDialogExerciseComponent } from './mouse-dialog-exercise.component';

describe('MouseDialogExerciseComponent', () => {
  let component: MouseDialogExerciseComponent;
  let fixture: ComponentFixture<MouseDialogExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseDialogExerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MouseDialogExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
