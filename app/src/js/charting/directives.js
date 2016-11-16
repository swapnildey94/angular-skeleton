'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'charting/controllers',
            'charting/defs/directive-defs',
            'utilities/directive-utils'
        ];

    define(fileDependencies, function () {

        var chartingDirectivesModule = angular.module('com.gs.modules.charting.directives',
            [
                'com.gs.modules.charting.controllers'
            ]);


        // Angular Component Registration to Modules ...

        chartingDirectivesModule.directive('gsChartRenderer',
            [
                gsChartRendererDirective
            ]);
    });

})();