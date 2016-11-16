'use strict';

function gsGlobalLoginPanelController(viewModel, globalViewModel,
                                      browser, stateService, authenticationService, authTokenKey) {
    var validation = viewModel && globalViewModel && browser &&
        authenticationService && authTokenKey && stateService;

    if (validation) {
        viewModel.authStatus = false;
        globalViewModel.isAuthenticated = false;

        viewModel.login = function () {
            authenticationService.authenticate(viewModel.userName, viewModel.password).then(
                function (result) {
                    if (result && result.token) {
                        browser.localStorage.setItem(authTokenKey, result.token);

                        viewModel.authStatus = true;
                        globalViewModel.isAuthenticated = true;
                    }
                },
                function (error) {
                    viewModel.errorMessage = "Error Occurred, Details : " +
                        JSON.stringify(error);

                    viewModel.authStatus = false;
                    globalViewModel.isAuthenticated = false;

                    throw error;
                });
        };

        viewModel.logout = function () {
            var HOME_VIEW = "home";

            viewModel.authStatus = false;
            globalViewModel.isAuthenticated = false;

            var authToken = browser.localStorage.getItem(authTokenKey);

            if (authToken)
                browser.localStorage.removeItem(authTokenKey);

            stateService.go(HOME_VIEW);
        };
    }
}