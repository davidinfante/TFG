import {Directive, EventEmitter, Output, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
export class AdDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
