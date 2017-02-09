import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex10.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex10 {
    demoId = 'ex10';

    vm = this;

    logMessage = 'Click on the  plot to see the percentage of a column wrt total';

    // Save the function reference in global object so that FusionCharts link can call 
    // it when called
    globalContainer = function (msg) {
        // Since the update is happening outside angular execution context we need 
        // the digest cycle to run to make sure that the view is updated.   
        this.$apply (function() {
            this.logMessage = "Percentage is  " + msg + "% of the total";
        });
    }
    
    DataSource = {
        "chart": {
            "caption": "Monthly revenue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "valueFontColor": "#ffffff",                
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",               
            "divLineIsDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },            
        "data": [
            {
                "label": "Jan",
                "value": "420000"
            }, 
            {
                "label": "Feb",
                "value": "810000"
            }, 
            {
                "label": "Mar",
                "value": "720000"
            }, 
            {
                "label": "Apr",
                "value": "550000"
            }, 
            {
                "label": "May",
                "value": "910000"
            }, 
            {
                "label": "Jun",
                "value": "510000"
            }, 
            {
                "label": "Jul",
                "value": "680000"
            }, 
            {
                "label": "Aug",
                "value": "620000"
            }, 
            {
                "label": "Sep",
                "value": "610000"
            }, 
            {
                "label": "Oct",
                "value": "490000"
            }, 
            {
                "label": "Nov",
                "value": "900000"
            }, 
            {
                "label": "Dec",
                "value": "730000"
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "700000",
                        "color": "#1aaf5d",
                        "valueOnRight": "1",
                        "displayvalue": "Monthly Target"
                    }
                ]
            }
        ]
    }

    total: number
    myDataSource = {}

    constructor () {
        var myData = this.DataSource.data
        this.total = 0;

        for (let i = 0; i < myData.length; i++) {
            this.total+=Number(myData[i].value);
        }
        for(var i = 0; i < myData.length; i++) {
            var value = Number(myData[i].value);

            // var ratio = ((5 / 8) * 100);
            var ratio = ((value / this.total) * 100).toFixed(2);
            // var ratio = (parseFloat(value / total) * 100).toFixed(2);
            var myString = "Ratio is : " + ratio + " %";
            myData[i]["link"] = "JavaScript:globalContainer.log(" + ratio + ");";
        }
        
        this.myDataSource = this.DataSource;
    
    }

}
