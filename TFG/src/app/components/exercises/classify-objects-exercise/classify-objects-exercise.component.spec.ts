import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClassifyObjectsExerciseComponent } from './classify-objects-exercise.component';

describe('ClassifyObjectsExerciseComponent', () => {
  let component: ClassifyObjectsExerciseComponent;
  let fixture: ComponentFixture<ClassifyObjectsExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifyObjectsExerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClassifyObjectsExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
