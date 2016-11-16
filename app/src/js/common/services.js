'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ngResource',
            'common/config',
            'common/defs/service-defs'
        ];

    define(fileDependencies, function () {

        var commonServicesModule = angular.module('com.gs.modules.common.services',
            [
                'ngResource',
                'com.gs.modules.common.config'
            ]);


        // Angular Component Registration to Modules ...

        commonServicesModule.factory('gsSubHeadingsService',
            [
                '$resource',
                'subHeadingsServiceUrl',
                gsSubHeadingsService
            ]);
    });

})();