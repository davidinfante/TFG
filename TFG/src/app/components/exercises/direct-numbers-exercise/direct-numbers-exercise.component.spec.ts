import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DirectNumbersExerciseComponent } from './direct-numbers-exercise.component';
import {DirectNumbersService} from '../../../services/exercises/direct-numbers.service';

describe('DirectNumbersExerciseComponent', () => {
  let component: DirectNumbersExerciseComponent;
  let fixture: ComponentFixture<DirectNumbersExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectNumbersExerciseComponent ],
      imports: [IonicModule.forRoot()],
      providers: [DirectNumbersService]
    }).compileComponents();

    fixture = TestBed.createComponent(DirectNumbersExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
