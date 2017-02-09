import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

Charts(FusionCharts);

@Component({
    selector: 'chart',
    templateUrl: 'ex7.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex7 {
    demoId = 'ex7';

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
    selectedValue = "nothing";

    events = {
        dataPlotClick: function (ev, props) {
            // $apply(function () {
                this.selectedValue = props.displayValue;
            // });
        }
    }
}

/*

    (function () {
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when ('/demos/ex7', {
            templateUrl: 'views/ex7.html',
            controller: 'ex7Controller'
        });
    }]);


    app.controller('ex7Controller', function ($scope, $rootScope) {
        $rootScope.demoId = 'ex7';

        $scope.dataSource = {
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
        $scope.selectedValue = "nothing";

        $scope.events = {
            dataplotclick: function (ev, props) {
                $scope.$apply(function () {
                    $scope.selectedValue = props.displayValue;
                });
            }
        }
    });
        
}());

*/