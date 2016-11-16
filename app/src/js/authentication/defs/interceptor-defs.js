'use strict';

function configureHttpInterceptorsPipeline(httpProvider) {
    if (httpProvider) {
        httpProvider.interceptors.push('gsAuthInterceptor');
    }
}

function gsAuthInterceptor(browser, promiseService, authTokenKey) {
    var serviceDefinition = {};
    var HTTP_UNAUTHORIZED = 401;
    var BEARER = "Bearer";

    if (browser && promiseService && authTokenKey) {
        serviceDefinition = {
            request: function (configuration) {
                configuration.headers = configuration.headers || {};

                var authToken = browser.localStorage.getItem(authTokenKey);

                if (authToken) {
                    configuration.headers.Authorization =
                        BEARER + " " + authToken;
                }

                return configuration;
            },
            responseError: function (error) {
                if (error.statusCode === HTTP_UNAUTHORIZED) {
                    // WRITE LOGIC TO REDIRECT THE USER FOR AUTHENTICATION
                }

                return promiseService(error);
            }
        };
    }

    return serviceDefinition;
}