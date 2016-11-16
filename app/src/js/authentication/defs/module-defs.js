'use strict';

function initializeAuthenticationModule(logService, globalViewModel, browser, authTokenKey) {
    var validation = logService && globalViewModel &&
        browser && authTokenKey;

    if (validation) {
        globalViewModel.isAuthenticated = false;

        var authToken = browser.localStorage.getItem(authTokenKey);

        if (authToken) {
            browser.localStorage.removeItem(authTokenKey);
        }

        logService.info("Authentication Module Initialized!");
    }
}