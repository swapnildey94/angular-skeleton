'use strict';

function gsGlobalHeaderDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            headerTitle: '@'
        };

        return createDirective(templateUrls.header, scope);
    }
}

function gsGlobalFooterDirective(templateUrls) {
    if(templateUrls) {
        return createDirective(templateUrls.footer);
    }
}

function gsGlobalNavigationPanelDirective(templateUrls) {
    if(templateUrls) {
        var scope = null;
        var controller = 'gsGlobalNavigationPanelController';

        return createDirective(templateUrls.navigationPanel, scope, controller);
    }
}

function gsSubHeadingViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            title: '=',
            description: '='
        };

        return createDirective(templateUrls.subHeadingViewer, scope);
    }
}