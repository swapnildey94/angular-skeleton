'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'common/config',
            'common/defs/directive-defs',
            'utilities/directive-utils'
        ];

    define(fileDependencies, function () {

        var commonDirectivesModule = angular.module('com.gs.modules.common.directives',
            [
                'com.gs.modules.common.config'
            ]);


        // Angular Component Registration to Modules ...

        commonDirectivesModule.directive('gsGlobalHeader',
            [
                'commonDirTemplateUrls',
                gsGlobalHeaderDirective
            ]);

        commonDirectivesModule.directive('gsGlobalFooter',
            [
                'commonDirTemplateUrls',
                gsGlobalFooterDirective
            ]);

        commonDirectivesModule.directive('gsGlobalNavigationPanel',
            [
                'commonDirTemplateUrls',
                gsGlobalNavigationPanelDirective
            ]);

        commonDirectivesModule.directive('gsSubHeadingViewer',
            [
                'commonDirTemplateUrls',
                gsSubHeadingViewerDirective
            ]);
    });

})();