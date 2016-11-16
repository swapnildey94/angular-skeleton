'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'authentication/module',
            'common/defs/module-defs',
            'common/directives',
            'common/routes',
            'common/decorators'
        ];

    define(fileDependencies, function () {

        var commonModule = angular.module('com.gs.modules.common',
            [
                'com.gs.modules.authentication',
                'com.gs.modules.common.directives',
                'com.gs.modules.common.routes',
                'com.gs.modules.common.decorators'
            ]);


        // Angular Component Registration to Modules ...
        commonModule.run(
            [
                '$log',
                '$rootScope',
                initializeCommonModule
            ]);
    });

})();