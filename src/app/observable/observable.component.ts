import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'ng-view',
    template: `
      <b>Angular 2 Component Using Observables!</b>
     
      <h6 style="margin-bottom: 0">VALUES:</h6>
      <div *ngFor="let value of values">: {{ value }}</div>
      
      <h6 style="margin-bottom: 0">ERRORs:</h6>
      <div>Errors: {{anyErrors}}</div>
      
      <h6 style="margin-bottom: 0">FINISHED:</h6>
      <div>Finished: {{ finished }}</div>
      
      <button style="margin-top: 2rem;" (click)="init()">Init</button>
      <button style="margin-top: 2rem;" (click)="init2()">Init2</button>
    `
})

export class ObservablestudyAppComponent {
  
    private data: Observable<Object>;
    private values = [];
    private anyErrors: boolean;
    private finished: boolean;

    value: number;

    constructor() {
    }

    init2() {
        console.log(this.data);
        this.values.push(40, 50, 70);

    }


    init() {
        var _this = this;
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(42);
            }, 1000);

            setTimeout(() => {
                observer.next(43);
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });


        let subscription = this.data.subscribe(
            function (val) {
                _this.values.push(val);
                _this.anyErrors = true,
                _this.finished = true
            }
        );
    }

}
