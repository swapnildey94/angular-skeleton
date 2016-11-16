'use strict';

function gsSubHeadingsService(restService, serviceUrl) {
    var serviceDefinition = {};

    if (restService && serviceUrl) {
        var subHeadingsRestService = restService(serviceUrl);

        serviceDefinition = {
            getSubHeadings: function () {
                return subHeadingsRestService.query().$promise;
            }
        };
    }

    return serviceDefinition;
}