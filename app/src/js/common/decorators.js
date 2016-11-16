'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'common/services',
            'common/defs/decorator-defs'
        ];

    define(fileDependencies, function () {

        var commonDecoratorsModule = angular.module('com.gs.modules.common.decorators',
            [
                'com.gs.modules.common.services'
            ]);


        // Angular Component Registration to Modules ...

        commonDecoratorsModule.config(
            [
                '$provide',
                configureCommonDecorators
            ]);
    });

})();