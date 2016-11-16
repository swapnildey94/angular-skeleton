'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'authentication/services',
            'authentication/defs/controller-defs'
        ];

    define(fileDependencies, function () {

        var authenticationControllersModule = angular.module('com.gs.modules.authentication.controllers',
            [
                'com.gs.modules.authentication.services'
            ]);


        // Angular Component Registration to Modules ...

        authenticationControllersModule.controller('gsGlobalLoginPanelController',
            [
                '$scope',
                '$rootScope',
                '$window',
                '$state',
                'gsAuthenticationService',
                'authTokenKey',
                gsGlobalLoginPanelController
            ]);
    });

})();