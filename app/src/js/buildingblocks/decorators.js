'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'buildingblocks/defs/decorator-defs'
        ];

    define(fileDependencies, function () {

        var buildingBlocksDecoratorsModule =
            angular.module('com.gs.modules.buildingblocks.decorators',
                []);


        // Angular Component Registration to Modules ...

        buildingBlocksDecoratorsModule.factory('$log',
            [
                '$window',
                gsGlobalLoggingService
            ]);

         buildingBlocksDecoratorsModule.factory('$exceptionHandler',
            [
                '$log',
                gsGlobalErrorHandlingService
            ]);
    });
})();