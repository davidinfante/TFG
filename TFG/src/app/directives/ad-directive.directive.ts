import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ad-host]'
})
/**
 * Creates components dynamically
 */
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

export class AdDirectiveDirective {
}
