
import {Directive, Component, Input, ContentChild, ContentChildren, QueryList} from "@angular/core";
// import { Tabsets } from './tabs.component';

@Component({
    selector: 'tab',
  	template: `
	  	<div [hidden]="!active">
	      <ng-content></ng-content>
	    </div>
  	`
})
export class Tab {

    @Input()
    id: number;

    @Input()
    heading: string;
    
    private tabName = '';
    
  	// ngOnInit() {
   //  	this.tabsets.addTab(this);
  	// }
    
    // constructor(private tabsets: Tabsets) {}

}
