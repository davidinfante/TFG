import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AssistantComponent} from '../../components/assistant/assistant.component';
import {Session} from '../../classes/session';
import {SessionsService} from '../../services/sessions.service';
import {ExercisesService} from '../../services/exercises.service';
import {AdDirective} from '../../directives/ad-directive.directive';
import {Exercise} from '../../classes/exercise';
import {exerciseManager} from '../../classes/exercise-manager';
import {EmptyExerciseComponent} from '../../components/exercises/empty-exercise/empty-exercise.component';

/**
 * Phase of the session
 */
export enum SessionPhase {
  NOEXERCISE,
  EXERCISE,
  END
}

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit, AfterViewInit {
  @ViewChild(AdDirective, null) adHost: AdDirective;
  @ViewChild('assistant', null) assistant: AssistantComponent;
  private session: Session;
  private currentExercise: Exercise;
  private currentExerciseIndex: number;
  private sessionPhase: SessionPhase;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sessionsService: SessionsService,
    private exercisesService: ExercisesService,
  ) { }

  ngOnInit() {
    // exerciseManager.notifyEnd.subscribe(this.exerciseEnded);
    exerciseManager.notifyEnd.subscribe( data => {

      // if () {
        this.nextExercise();
      // }
    });

    this.currentExerciseIndex = -1;
    this.sessionPhase = SessionPhase.NOEXERCISE;
    this.session = this.sessionsService.getSession('s1');
  }

  ngAfterViewInit() {
    this.assistant.setTitle(this.session.title);
    this.assistant.setDescription(this.session.description);
  }

  /**
   * Get the next exercise and load it,
   * if there are no exercises left,
   * show the ending text
   */
  private nextExercise(): void {
    // Only load the next exercise if there is more left in the session
    if (this.currentExerciseIndex < this.exercisesService.getNumberOfExercises() - 1) {
      this.sessionPhase = SessionPhase.EXERCISE;
      ++this.currentExerciseIndex;
      // Get the next exercise from exercises service
      this.currentExercise = this.exercisesService.getExercise(this.session.exercises[this.currentExerciseIndex].id);
      // Dynamically generate the component
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentExercise.class as any);
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);

      // Change the assistant's texts with the exercise's
      this.assistant.setTitle(this.currentExercise.title);
      this.assistant.setDescription(this.currentExercise.description);
    } else { // No exercises left
      this.sessionPhase = SessionPhase.END;

      // Dynamically generate the empty component
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(EmptyExerciseComponent as any);
      const viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);

      this.assistant.setTitle('Fin de la sesión');
      this.assistant.setDescription('Fin de la sesión');
    }
  }

  /**
   * Receive from an exercise that the exercise has ended
   */
  private exerciseEnded(data: any): void {
    console.log(data);

    if (data.class === this.currentExercise.class) {
      this.sessionPhase = SessionPhase.NOEXERCISE;
      this.nextExercise();
    }

  }

}
