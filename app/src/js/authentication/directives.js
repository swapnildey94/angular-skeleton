'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'authentication/config',
            'authentication/defs/directive-defs',
            'authentication/controllers'
        ];

    define(fileDependencies, function () {

        var authenticationDirectivesModule = angular.module('com.gs.modules.authentication.directives',
            [
                'com.gs.modules.authentication.config',
                'com.gs.modules.authentication.controllers'
            ]);


        // Angular Component Registration to Modules ...

        authenticationDirectivesModule.directive('gsGlobalLoginPanel',
            [
                'authenticationDirTemplateUrls',
                gsGlobalLoginPanelDirective
            ]);
    });

})();