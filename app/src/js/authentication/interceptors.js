'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'authentication/defs/interceptor-defs'
        ];

    define(fileDependencies, function () {

        var authenticationInterceptorsModule = angular.module('com.gs.modules.authentication.interceptors',
            []);

        // Angular Component Registration to Modules ...

        authenticationInterceptorsModule.factory('gsAuthInterceptor',
            [
                '$window',
                '$q',
                'authTokenKey',
                gsAuthInterceptor
            ]);

        authenticationInterceptorsModule.config(
            [
                '$httpProvider',
                configureHttpInterceptorsPipeline
            ]);
    });
})();