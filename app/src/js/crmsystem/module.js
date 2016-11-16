'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ngRadialGauge',
            'charting/module',
            'crmsystem/routes',
            'crmsystem/directives',
            'crmsystem/filters',
            'crmsystem/defs/module-defs'
        ];

    define(fileDependencies, function () {

        var crmSystemModule = angular.module('com.gs.modules.crmsystem',
            [
                'ngRadialGauge',
                'com.gs.modules.charting',
                'com.gs.modules.crmsystem.routes',
                'com.gs.modules.crmsystem.filters',
                'com.gs.modules.crmsystem.directives'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemModule.run(
            [
                '$log',
                '$rootScope',
                initializeCrmSystemModule
            ]);
    });

})();