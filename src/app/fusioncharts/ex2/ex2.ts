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
    templateUrl: 'ex2.html'
})

export class Ex2 {
    demoId = 'ex2';
    sampleCode = fcDemos;
    dataSource = {
        chart: {
            caption: "Age profile of website visitors",
            subcaption: "Last Year",
            startingangle: "120",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            showpercentintooltip: "0",
            plottooltext: "Age group : $label Total visit : $datavalue",
            theme: "ocean"
        },
        data: [
            {
                label: "Teenage",
                value: "1250400"
            },
            {
                label: "Adult",
                value: "1463300"
            },
            {
                label: "Mid-age",
                value: "1050700"
            },
            {
                label: "Senior",
                value: "491000"
            }
        ]
    }

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }

}
