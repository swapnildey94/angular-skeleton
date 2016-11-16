/**
 * Created by Ramkumar on 3/3/2016.
 */
function createDirective(url, scope, controller) {
    var directiveDefinition = {
        restrict: 'EA'
    };

    if (url) {
        directiveDefinition.templateUrl = function () {
            return url;
        };
    }

    if (scope) {
        directiveDefinition.scope = scope;
    }

    if (controller) {
        directiveDefinition.controller = controller;
    }

    return directiveDefinition;
}