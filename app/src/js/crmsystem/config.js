'use strict';

(function () {

    var fileDependencies =
        [
            'angular'
        ];

    define(fileDependencies, function () {

        var crmSystemConfigModule = angular.module('com.gs.modules.crmsystem.config', []);

        // Angular Component Registration to Modules ...

        crmSystemConfigModule.constant('crmSystemDirTemplateUrls', {
            customerViewer: 'js/crmsystem/partials/directives/customer-viewer.html',
            customerSearchPanel: 'js/crmsystem/partials/directives/customer-search-panel.html',
            customerDetailViewer: 'js/crmsystem/partials/directives/customer-detail-viewer.html',
            orderViewer: 'js/crmsystem/partials/directives/order-viewer.html',
            orderChartViewer: 'js/crmsystem/partials/directives/order-chart-viewer.html',
            stockViewer: 'js/crmsystem/partials/directives/stock-viewer.html',
            dashboardSwitchPanel: 'js/crmsystem/partials/directives/dashboard-switch-panel.html'
        });

        crmSystemConfigModule.constant('crmSystemViewTemplateUrls', {
            crmSystemHome: 'js/crmsystem/partials/views/crm-system-home.html',
            crmSystemDashboardHome: 'js/crmsystem/partials/views/crm-system-dashboard-home.html',
            crmSystemNewCustomerHome: 'js/crmsystem/partials/views/crm-system-new-customer-home.html'
        });

        crmSystemConfigModule.constant('crmSystemServiceUrls', {
            baseUrl: '/api',
            customers: {
                baseUrl: '/customers',
                queryAndSave: '/:customerId'
            },
            orders: {
                baseUrl: '/orders',
                queryAndSave: '/:customerId'
            }
        });

        crmSystemConfigModule.constant('photoBaseUrl', 'images/people');
        crmSystemConfigModule.constant('symbols', {
            check: '\u2713',
            cross: '\u2718'
        });

        crmSystemConfigModule.constant('crmSystemEvents', {
            DASHBOARD_SWITCH_EVENT: 'crmSystemDashboardSwitchEvent'
        });

        crmSystemConfigModule.constant('redirectDetails', {
            timeoutPeriod: 4000,
            redirectTo: 'crmsystem'
        });
    });

})();