import {Component} from '@angular/core';

var chartData = {
  data: [{value: 50}, {value: 55}, {value: 70}, {value: 60}]
}
var configObj = {
  type: "Column2D",
  width: 500,
  height: 300,
  dataFormat: 'json',
  dataSource: {chart: {}, data: [{value: 500}, {value: 600}]}
}

@Component({
  	selector: 'chart',
  	template: '<fusioncharts [chartConfig] = configuration> Column2D chart will render here... </fusioncharts>'
})

export class FusionChartsSample {
	myData = JSON.stringify(chartData);

  	configuration = JSON.stringify(configObj);
}
