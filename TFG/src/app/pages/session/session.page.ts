import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AssistantComponent} from "../../components/assistant/assistant.component";
import {Session} from "../../classes/session";
import {SessionsService} from "../../services/sessions.service";
import {ExercisesService} from "../../services/exercises.service";
import {AdDirective} from "../../directives/ad-directive.directive";
import {Exercise} from "../../classes/exercise";

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  @ViewChild(AdDirective, null) adHost: AdDirective;
  @ViewChild('assistant', null) assistant: AssistantComponent;
  session: Session;
  currentExercise: Exercise;
  currentExerciseIndex: number;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sessionsService: SessionsService,
    private exercisesService: ExercisesService,
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.currentExerciseIndex = -1;
    this.session = this.sessionsService.getSession('s1');
  }

  ngAfterViewInit() {
    this.assistant.setTitle(this.session.title);
    this.assistant.setDescription(this.session.description);
  }

  /**
   * Get the next exercise's ID and load it
   */
  nextExercise() {
    // Only load the next exercise if there is more left in the session
    if (this.currentExerciseIndex < this.exercisesService.getAllExercises().length-1) {
      ++this.currentExerciseIndex;
      // Get the next exercise from exercises service
      this.currentExercise = this.exercisesService.getExercise(this.session.exercises[this.currentExerciseIndex].id);

      // Dynamically generate the component
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.currentExercise.class as any);
      let viewContainerRef = this.adHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent(componentFactory);

      // Change the assistant's texts with the exercise's
      this.assistant.setTitle(this.currentExercise.title);
      this.assistant.setDescription(this.currentExercise.description);
    }
  }

}
