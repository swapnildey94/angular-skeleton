'use strict';

(function () {

    var fileDependencies =
        [
            'angular'
        ];

    define(fileDependencies, function () {

        var commonConfigModule = angular.module('com.gs.modules.common.config',
            []);


        // Angular Component Registration to Modules ...

        commonConfigModule.constant('commonDirTemplateUrls', {
            header: 'js/common/partials/directives/header.html',
            navigationPanel: 'js/common/partials/directives/navigation-panel.html',
            footer: 'js/common/partials/directives/footer.html',
            subHeadingViewer: 'js/common/partials/directives/sub-heading-viewer.html'
        });

        commonConfigModule.constant('commonViewTemplateUrls', {
            home: 'js/common/partials/views/home.html',
            about: 'js/common/partials/views/about.html'
        });

        commonConfigModule.constant('subHeadingsServiceUrl', 'data/data.json');
    });

})();