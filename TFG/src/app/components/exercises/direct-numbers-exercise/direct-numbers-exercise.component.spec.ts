import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectNumbersExerciseComponent } from './direct-numbers-exercise.component';

describe('DirectNumbersExerciseComponent', () => {
  let component: DirectNumbersExerciseComponent;
  let fixture: ComponentFixture<DirectNumbersExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectNumbersExerciseComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectNumbersExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
