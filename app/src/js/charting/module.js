'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'c3',
            'charting/directives',
            'charting/defs/module-defs'
        ];

    define(fileDependencies, function () {

        var chartingModule = angular.module('com.gs.modules.charting',
            [
                'com.gs.modules.charting.directives'
            ]);


        // Angular Component Registration to Modules ...

        chartingModule.run(
            [
                '$log',
                initializeChartingModule
            ]);
    });

})();