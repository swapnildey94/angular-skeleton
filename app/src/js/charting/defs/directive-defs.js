'use strict';

function gsChartRendererDirective() {
    var templateUrl = null;
    var scope = {
        chartData: '=',
        chartType: '@',
        targetDomElement: '@'
    };
    var controller = 'gsChartRendererController';

    return createDirective(templateUrl, scope, controller);
}