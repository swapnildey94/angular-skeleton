'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'authentication/directives',
            'authentication/interceptors',
            'authentication/defs/module-defs'
        ];

    define(fileDependencies, function () {

        var authenticationModule = angular.module('com.gs.modules.authentication',
            [
                'com.gs.modules.authentication.directives',
                'com.gs.modules.authentication.interceptors'
            ]);


        // Angular Component Registration to Modules ...

        authenticationModule.run(
            [
                '$log',
                '$rootScope',
                '$window',
                'authTokenKey',
                initializeAuthenticationModule
            ]);
    });

})();