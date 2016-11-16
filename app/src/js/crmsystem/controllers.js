'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'socket.io',
            'crmsystem/services',
            'crmsystem/defs/controller-defs'
        ];

    define(fileDependencies, function () {

        var crmSystemControllersModule = angular.module('com.gs.modules.crmsystem.controllers',
            [
                'com.gs.modules.crmsystem.services'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemControllersModule.controller('gsCrmSystemHomeViewController',
            [
                '$scope',
                'gsCustomerService',
                'gsPushNotificationService',
                gsCrmSystemHomeViewController
            ]);

        crmSystemControllersModule.controller('gsCrmSystemDashboardHomeViewController',
            [
                '$scope',
                '$stateParams',
                '$q',
                '$state',
                'gsCustomerService',
                'gsOrderService',
                'crmSystemEvents',
                gsCrmSystemDashboardHomeViewController
            ]);

        crmSystemControllersModule.controller('gsOrderChartViewerController',
            [
                '$scope',
                'gsOrdersChartDataTransformer',
                gsOrderChartViewerController
            ]);

        crmSystemControllersModule.controller('gsStockViewerController',
            [
                '$scope',
                '$interval',
                '$window',
                'gsStockQuoteService',
                gsStockViewerController
            ]);

        crmSystemControllersModule.controller('gsDashboardSwitchPanelController',
            [
                '$scope',
                'crmSystemEvents',
                gsDashboardSwitchPanelController
            ]);

        crmSystemControllersModule.controller('gsCrmSystemNewCustomerHomeViewController',
            [
                '$scope',
                '$timeout',
                '$state',
                'gsCustomerService',
                'redirectDetails',
                gsCrmSystemNewCustomerHomeViewController
            ]);
    });

})();