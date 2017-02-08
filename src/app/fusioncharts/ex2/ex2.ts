import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex2.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex2 {
    demoId = 'ex2';
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
}
