import { Component, AfterViewInit} from '@angular/core';
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

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex5a.html'
})

export class Ex5a {
    demoId = 'ex5a';
    sampleCode = fcDemos;

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};
