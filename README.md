# TFG
TFG 19/20

### How the session page work
The session page implements ng-template using the ad-host directive, where the exercises will be loaded.  
Exercises are loaded using ComponentFactoryResolver and created with ViewContainerRef.  
This allows the programmer to create exercises freely and makes the app extensible.  
To allow freely exercise development, each exercise can change the Assistant status via exerciseManager.


### How to add new Sessions:
- Edit the file `/services/sessions.service.ts` adding a new element in the sessions array including:
  - The session's id (the standard is s + number e.g. `s1`)
  - The title as a string
  - A description as a string
  - An array with the session's exercises (id, type, duration, maxTime, dependsOn, repetitions, 
  durationKind)

### How to add new Exercises:
- Create or use any components you may need and pack them up in a component with the full exercise
  - Your main component class must have these attributes `id: string;
                                                          type: number;
                                                          duration: number;
                                                          maxTime: number;
                                                          dependsOn: number;
                                                          repetitions: number;
                                                          durationKind: DurationKind;` 
  - Include the object `exerciseManager` in your main exercise class
  - Add this code in the constructor `exerciseManager.exerciseInfo.subscribe( data => {
                                            this.id = data.id,
                                            this.type = data.type,
                                            this.duration = data.duration,
                                            this.maxTime = data.maxTime,
                                            this.dependsOn = data.dependsOn,
                                            this.repetitions = data.repetitions,
                                            this.durationKind = data.durationKind;
                                          });`
  - Add this code to the function that is called when the exercise end
   `exerciseManager.notifyEnd({
          id: this.id,
          success: true
        });`
  - If you need to change the text in the Assistant or hide it do it like this: 
  `exerciseManager.notifyAssistant({
         show: (true/false),
         title: 'Your title',
         description: 'Your description'
       });`
- Include the component's class in the `declarations: [...]` and `entryComponents: [...]` 
        sections at `/pages/session/session.module.ts`
- Edit the file `/services/exercises.service.ts` adding a new element in the exercises array including:
  - The exercise's id (the standard is e + number e.g. `e1`), this id must be the same as the one 
  specified in the session's exercises array
  - The component's class that packs the full exercise
  - The title of the exercise as a string
