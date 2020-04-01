import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
import {AssistantComponent} from '../../components/assistant/assistant.component';
import {Session} from '../../classes/session';
import {SessionsService} from '../../services/sessions.service';
import {ExercisesService} from '../../services/exercises.service';
import {AdDirective} from '../../directives/ad-directive.directive';
import {Exercise} from '../../classes/exercise';
import {exerciseManager} from '../../classes/exercise-manager';

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
  private sessionId: string;
  @ViewChild(AdDirective, null) adHost: AdDirective;
  @ViewChild('assistant', null) assistant: AssistantComponent;
  private session: Session;
  private currentExercise: Exercise;
  private currentExerciseIndex: number;
  private sessionPhase: SessionPhase;
  // Dynamically generate component attributes
  private componentRef: ComponentRef<any>;
  private viewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sessionsService: SessionsService,
    private exercisesService: ExercisesService,
  ) {
    // Subscribe to the ending exercise event
    exerciseManager.exerciseEnded.subscribe( data => {
      if (this.currentExercise.id === data.id && data.success) {
        this.nextExercise();
      } else {
        console.log('An error has occurred while ending the exercise');
      }
    });
  }

  ngOnInit() {
    this.sessionId = 's1';
    this.currentExerciseIndex = 0;
    this.sessionPhase = SessionPhase.NOEXERCISE;
    this.viewContainerRef = null;
    this.componentRef = null;
    this.session = this.sessionsService.getSession(this.sessionId);
  }

  ngAfterViewInit() {
    this.assistant.setTitle(this.session.title);
    this.assistant.setDescription(this.session.description);
  }

  /**
   * Get the next exercise and load it,
   * if there are no exercises left
   * show the ending text
   */
  private nextExercise(): void {
    // Only load the next exercise if there is more left in the session
    if (this.currentExerciseIndex < this.sessionsService.getNumberOfExercises(this.sessionId)) {
      this.sessionPhase = SessionPhase.EXERCISE;
      // Get the next exercise from exercises service
      this.currentExercise = this.exercisesService.getExercise(this.session.exercises[this.currentExerciseIndex].id);
      // Destroy the previous components
      if (this.componentRef !== null && this.viewContainerRef !== null) {
        this.viewContainerRef.clear();
        this.componentRef.destroy();
        delete this.componentRef;
        delete this.viewContainerRef;
      }
      // Dynamically generate the component
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentExercise.class as any);
      this.viewContainerRef = this.adHost.viewContainerRef;
      this.componentRef = this.viewContainerRef.createComponent(componentFactory);

      // Notify the exercise their attributes
      exerciseManager.notifyExerciseInfo(this.sessionsService.getExerciseAttributes(this.sessionId, this.currentExerciseIndex));

      ++this.currentExerciseIndex;
      // Change the assistant's texts with the exercise's
      this.assistant.setTitle(this.currentExercise.title);
      this.assistant.setDescription(this.currentExercise.description);
    } else { // No exercises left
      this.sessionPhase = SessionPhase.END;
      this.componentRef.destroy();

      this.assistant.setTitle('Fin de la sesión');
      this.assistant.setDescription('Fin de la sesión');
    }
  }

}
