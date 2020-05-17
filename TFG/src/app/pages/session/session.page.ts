import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewChild, ViewContainerRef
} from '@angular/core';
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
/**
 * Class that dynamically loads the exercises of a session
 */
export class SessionPage implements OnInit, AfterViewInit {
  /**
   * Exercise creator directive
   */
  @ViewChild(AdDirective, null) adHost: AdDirective;
  /**
   * Session's attributes
   */
  private sessionId: number;
  private session: Session;
  private currentExercise: Exercise;
  private currentExerciseIndex: number;
  private sessionPhase: SessionPhase;
  /**
   * Dynamically generate component attributes
   */
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
        // Do something with the score
        // data.score bla bla bla
        this.nextExercise();
      } else {
        console.log('An error has occurred while ending the exercise');
      }
    });
  }

  ngOnInit() {
    // Get the actual session from the database
    this.sessionId = 1;
    // Get the current exercise index from the database
    this.currentExerciseIndex = 0;

    this.sessionPhase = SessionPhase.NOEXERCISE;
    this.viewContainerRef = null;
    this.componentRef = null;
    this.session = this.sessionsService.getSession(this.sessionId);
  }

  ngAfterViewInit() {
    // Change the assistant text with the session's title and description
    this.changeAssistantText(true, this.session.title, this.session.description);
  }

  /**
   * Get the next exercise and load it,
   * if there are no exercises left
   * show the ending text
   */
  private nextExercise(): void {
    // Only load the next exercise if there is more left in the session
    if (this.currentExerciseIndex < this.sessionsService.length(this.sessionId)) {
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
    } else { // No exercises left
      this.sessionPhase = SessionPhase.END;
      this.componentRef.destroy();

      this.changeAssistantText(true, 'Fin de la sesión', 'La sesión ha finalizado');
    }
  }

  /**
   * Gets the next session
   */
  private nextSession(): void {
    // Get the actual session from the database
    if (this.sessionsService.getAllSessions().length > this.sessionId) {
      ++this.sessionId;

      // Get the current exercise index from the database
      this.currentExerciseIndex = 0;

      this.sessionPhase = SessionPhase.NOEXERCISE;
      this.viewContainerRef = null;
      this.componentRef = null;
      this.session = this.sessionsService.getSession(this.sessionId);

      // Change the assistant text with the session's title and description
      this.changeAssistantText(true, this.session.title, this.session.description);
    } else {
      // No more sessions left
    }
  }

  /**
   * Changes the text and visibility of the assistant
   */
  private changeAssistantText(showA: boolean, titleA: string, descriptionA: string): void {
    exerciseManager.notifyAssistant({
      show: showA,
      title: titleA,
      description: descriptionA
    });
  }

}
