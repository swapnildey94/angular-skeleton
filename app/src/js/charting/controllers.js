'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'charting/defs/controller-defs'
        ];

    define(fileDependencies, function () {

        var chartingControllersModule = angular.module('com.gs.modules.charting.controllers',
            []);


        // Angular Component Registration to Modules ...

        chartingControllersModule.controller('gsChartRendererController',
            [
                '$scope',
                gsChartRendererController
            ]);
    });

})();