'use strict';

function gsGlobalLoginPanelDirective(templateUrls) {
    var scope = null;
    var controller = 'gsGlobalLoginPanelController';

    if (templateUrls) {
        return createDirective(templateUrls.loginPanel, scope, controller);
    }
}