import {Component} from '@angular/core';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load Ocean theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';

// Pass FusionCharts as dependency to Charts module
Charts(FusionCharts);

// Pass FusionCharts as dependency to Ocean theme module
Ocean(FusionCharts);

import fcDemos from '../samplecode';

@Component({
    selector: 'chart',
    templateUrl: 'ex5.html'
})

export class Ex5 {
    demoId = 'ex5';
    sampleCode = fcDemos;
};

