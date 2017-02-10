import {Component} from '@angular/core';

// import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex6.html',
    styles: [`
        .tabset {
            display: none;
        }
        .tabset .nav-tabs {
            overflow: hidden;
            list-style: none;
            margin: 0;
            padding: 0;
            border-bottom: 1px solid #ccc;
        }

        .tabset .nav-tabs li {
            float: left;    
        }

        .tabset .nav-tabs li.active {
            border: 1px solid #ccc;
            border-bottom-color: #fff
        }    
    `]
})

export class Ex6 {

    constructor() {
        this.dataSource = {
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
        }
    }

    dataSource: any;

    type = "Column2D";
    width = "600";
    height = "300";

    demoId = 'ex6';

    message = '';

    getValue = function () {
        var max = 900000, min = 300000;
        return Math.round(((max - min) * Math.random()) + min);
    };

    updateMyChartData() {

        this.dataSource.data[2].label = "This Label is Updated";
        this.dataSource.data[2].value = this.getValue();

        this.dataSource.data[3].label = "This is updated as well";
        this.dataSource.data[3].value = this.getValue();
    }

    updateChartCaption() {
        this.dataSource.chart.caption = "Some Random Caption";
    }
    updateChartType() {
        this.type = (this.type === "Column3D") ? 'Column2D' : 'Column3D';
    }
    updateChartWidth() {
        this.width = (this.width === "600") ? '800' : '600';
    }
    updateChartHeight() {
        this.height = (this.height === "300") ? '400' : '300';
    }

}

    