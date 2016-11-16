'use strict';

function configureCommonRouter(stateProvider, urlRouterProvider, templateUrls) {
    if (stateProvider && urlRouterProvider && templateUrls) {
        stateProvider.state('home', {
            url: '/home',
            templateUrl: function () {
                return templateUrls.home;
            },
            controller: 'gsHomeViewController'
        });

        stateProvider.state('about', {
            url: '/about',
            templateUrl: function () {
                return templateUrls.about;
            }
        });

        urlRouterProvider.otherwise('home');
    }
}