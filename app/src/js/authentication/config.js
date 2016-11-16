'use strict';

(function () {

    var fileDependencies =
        [
            'angular'
        ];

    define(fileDependencies, function () {

        var authenticationConfigModule = angular.module('com.gs.modules.authentication.config',
            []);


        // Angular Component Registration to Modules ...

        authenticationConfigModule.constant('authenticationDirTemplateUrls', {
            loginPanel: 'js/authentication/partials/directives/login-panel.html'
        });

        authenticationConfigModule.constant('authTokenKey', 'gsat');
        authenticationConfigModule.constant('authenticationServiceUrl', '/authenticate');
    });

})();