'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ngResource',
            'crmsystem/config',
            'crmsystem/defs/service-defs'
        ];

    define(fileDependencies, function () {

        var crmSystemServicesModule = angular.module('com.gs.modules.crmsystem.services',
            [
                'ngResource',
                'com.gs.modules.crmsystem.config'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemServicesModule.factory('gsCustomerService',
            [
                '$resource',
                'crmSystemServiceUrls',
                gsCustomerService
            ]);

        crmSystemServicesModule.factory('gsOrderService',
            [
                '$resource',
                'crmSystemServiceUrls',
                gsOrderService
            ]);

        crmSystemServicesModule.factory('gsOrdersChartDataTransformer',
            [
                gsOrdersChartDataTransformer
            ]);

        crmSystemServicesModule.factory('gsStockQuoteService',
            [
                gsStockQuoteService
            ]);

        crmSystemServicesModule.service('gsPushNotificationService',
            [
                'gsPushNotificationUrlProvider',
                gsPushNotificationService
            ]);

        crmSystemServicesModule.factory('gsPushNotificationUrlProvider',
            [
                '$window',
                gsPushNotificationUrlProvider
            ]);
    });

})();