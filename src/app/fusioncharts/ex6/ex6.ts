import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex6.html',
    styles: [`
        .tabset {
            display: none;
            padding-right: 10px;
            padding-bottom: 10px;
            padding-left: 10px;
            border: 2px solid black;
            font-size: 20px;
        }
    `]
})

export class Ex6 {
    demoId = 'ex6';
    type = "Column2D";
    width = "600";
    height = "300";
    dataFormat = "json";
    html = "This is a sample html content";
    dataSource: any = {
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
    js: any = `{
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
    }`
    getRandomNumber = function () {
        var max = 900000, min = 300000;
        return Math.round(((max - min) * Math.random()) + min);
    }
    updateMyChartData() {

        this.dataSource.data[2].label = "This Label is Updated";
        this.dataSource.data[2].value = this.getRandomNumber();

        this.dataSource.data[3].label = "This is updated as well";
        this.dataSource.data[3].value = this.getRandomNumber();
    }
}

    