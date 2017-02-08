import {Component} from '@angular/core';
@Component({
	selector: 'ng-prism',
  	template: '<pre><code ng-transclude></code></pre>'
	// restrict: 'E',
  	// replace:true,
  	// transclude: true,
})

export class CodePrev {
}
