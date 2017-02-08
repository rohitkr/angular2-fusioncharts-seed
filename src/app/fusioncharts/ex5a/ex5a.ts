import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex5a.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex5a {
    demoId = 'ex5a';
};
