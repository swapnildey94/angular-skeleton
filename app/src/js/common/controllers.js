'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'common/services',
            'common/defs/controller-defs'
        ];

    define(fileDependencies, function () {

        var commonControllersModule = angular.module('com.gs.modules.common.controllers',
            [
                'com.gs.modules.common.services'
            ]);


        // Angular Component Registration to Modules ...

        commonControllersModule.controller('gsHomeViewController',
            [
                '$scope',
                'gsSubHeadingsService',
                gsHomeViewController
            ]);

        commonControllersModule.controller('gsGlobalNavigationPanelController',
            [
                '$scope',
                '$rootScope',
                gsGlobalNavigationPanelController
            ]);
    });

})();