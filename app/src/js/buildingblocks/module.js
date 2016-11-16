'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'buildingblocks/decorators',
            'buildingblocks/defs/module-defs'
        ];

    define(fileDependencies, function () {

        var buildingBlocksModule = angular.module('com.gs.modules.buildingblocks',
            [
                'com.gs.modules.buildingblocks.decorators'
            ]);


        // Angular Component Registration to Modules ...

        buildingBlocksModule.run(
            [
                '$log',
                initializeBuildingBlocksModule
            ]);
    });

})();