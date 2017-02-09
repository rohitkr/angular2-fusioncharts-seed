import {Component} from '@angular/core';

// import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex6.html',
    styleUrls: [
        // '../../../node_modules/bootstrap/dist/css/bootstrap.css',
        '../ex.css'
    ]
})

export class Ex6 {
    demoId = 'ex6';

    dataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "ocean"
        },
        data:[{
            label: "Bakersfield Central",
            value: "880000"
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };

    message = '';

    getValue = function () {
        var max = 900000, min = 300000;
        return Math.round(((max - min) * Math.random()) + min);
    };

    updateMyChartData = function () {
        // console.log("updateMyChartData called...");
        
        // this.message = this.getValue();
        
        // this.data = this.getValue();
        // this.navChange = this.getValue();

        // this.dataSource = {data: [{}, {}, {}, {}, {}, {}, {}, {}]};

        this.dataSource.data[2].label = "This Label is Updated";
        this.dataSource.data[2].value = this.getValue();

        this.dataSource.data[3].label = "This is updated as well";
        this.dataSource.data[3].value = this.getValue();
    };

}

    