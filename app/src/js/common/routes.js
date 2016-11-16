'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ui.router',
            'common/config',
            'common/controllers',
            'common/defs/route-defs'
        ];

    define(fileDependencies, function () {

        var commonRoutesModule = angular.module('com.gs.modules.common.routes',
            [
                'ui.router',
                'com.gs.modules.common.controllers',
                'com.gs.modules.common.config'
            ]);


        // Angular Component Registration to Modules ...

        commonRoutesModule.config(
            [
                '$stateProvider',
                '$urlRouterProvider',
                'commonViewTemplateUrls',
                configureCommonRouter
            ]);

    });

})();