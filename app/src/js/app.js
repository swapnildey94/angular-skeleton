/**
 * Created by Ramkumar on 3/3/2016.
 */
'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'defs/app-defs',
            'buildingblocks/module',
            'common/module',
            'crmsystem/module',
            'uiRouterAnimation'
        ];

    define(fileDependencies, function () {

        var appModule = angular.module('com.gs.app',
            [
                'ngAnimate',
                'anim-in-out',
                'com.gs.modules.buildingblocks',
                'com.gs.modules.common',
                'com.gs.modules.crmsystem'
            ]);


        // Angular Component Registration to Modules ...

        appModule.run(
            [
                '$log',
                '$rootScope',
                initializeAppModule
            ]);
    });

})();