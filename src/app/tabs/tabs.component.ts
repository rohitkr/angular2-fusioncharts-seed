import { Component, ContentChildren, ViewChildren, ViewChild, QueryList, AfterContentInit, NgModule, EventEmitter, Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Tab } from './tab';


@Component({
    selector:'tabset',
    template: `
    <div>
	    <ul>
	        <li *ngFor="let tab of tabset;" (click)="selectTab(tab)">
	        	{{tab.heading}} {{tab.myChildComponent}} {{tab.tabset}}
	        </li>
	    </ul>
	    <ng-content></ng-content>
    </div>
`
})
export class Tabsets {
	@ContentChildren(Tab)
    tabset: QueryList<Tab>;

    @Output() selected = new EventEmitter();

    // tabs: Tab[] = [];

    selectTab(tab: Tab) {
    	console.log('selectTab: ', tab);
	}

   //  addTab(tab: Tab) {
   //  	console.log(tab);

   //   //    if (this.tabs.length === 0) {
   //   //       	tab.active = true;
   //  	// }
   //  	// this.tabs.push(tab);
  	// }

  	ngOnInit() {
    	// console.log(this.tab);
  	}
    
    // constructor(tapsnnn: Tab) {}

  	// ngAfterViewInit(tabs: Tab) {
  	// 	console.log(tabs);
  	// }
}




@NgModule({
    imports: [ BrowserModule ],
    declarations: [
        Tabsets, Tab
    ],
    exports: [
        Tabsets, Tab
    ]
})

export class TabModule {}

