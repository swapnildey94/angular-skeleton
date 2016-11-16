'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'ui.router',
            'crmsystem/config',
            'crmsystem/controllers',
            'crmsystem/defs/route-defs'
        ];

    define(fileDependencies, function () {

        var crmSystemRoutesModule = angular.module('com.gs.modules.crmsystem.routes',
            [
                'ui.router',
                'com.gs.modules.crmsystem.config',
                'com.gs.modules.crmsystem.controllers'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemRoutesModule.config(
            [
                '$stateProvider',
                'crmSystemViewTemplateUrls',
                configureCrmSystemRouter
            ]);
    });

})();