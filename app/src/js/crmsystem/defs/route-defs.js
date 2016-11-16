'use strict';

function configureCrmSystemRouter(stateProvider, templateUrls) {
    if (stateProvider && templateUrls) {
        stateProvider.state('crmsystem', {
            url: '/crm-system',
            templateUrl: function () {
                return templateUrls.crmSystemHome;
            },
            controller: 'gsCrmSystemHomeViewController'
        });

        stateProvider.state('crmdashboard', {
            url: '/crm-dashboard/:customerId',
            templateUrl: function () {
                return templateUrls.crmSystemDashboardHome;
            },
            controller: 'gsCrmSystemDashboardHomeViewController'
        });

        stateProvider.state('newcustomer', {
            url: '/new-customer',
            templateUrl: function () {
                return templateUrls.crmSystemNewCustomerHome;
            },
            controller: 'gsCrmSystemNewCustomerHomeViewController'
        });
    }
}