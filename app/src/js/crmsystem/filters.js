'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'crmsystem/config',
            'crmsystem/defs/filter-defs'
        ];

    define(fileDependencies, function () {

        var crmSystemFiltersModule = angular.module('com.gs.modules.crmsystem.filters',
            [
                'com.gs.modules.crmsystem.config'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemFiltersModule.filter('gsPhotoUrl',
            [
                'photoBaseUrl',
                gsPhotoUrlFilter
            ]);

        crmSystemFiltersModule.filter('gsStatus',
            [
                'symbols',
                gsStatusFilter
            ]);

        crmSystemFiltersModule.filter('gsHealth',
            [
                gsHealthFilter
            ]);
    });

})();