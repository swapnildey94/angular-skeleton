'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ngResource',
            'authentication/config',
            'authentication/defs/service-defs'
        ];

    define(fileDependencies, function () {

        var authenticationServicesModule = angular.module('com.gs.modules.authentication.services',
            [
                'ngResource',
                'com.gs.modules.authentication.config'
            ]);


        // Angular Component Registration to Modules ...

        authenticationServicesModule.factory('gsAuthenticationService',
            [
                '$resource',
                'authenticationServiceUrl',
                gsAuthenticationService
            ]);
    });

})();