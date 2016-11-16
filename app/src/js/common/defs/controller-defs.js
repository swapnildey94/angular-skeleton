'use strict';

function gsHomeViewController(viewModel, subHeadingsService) {
    if (viewModel && subHeadingsService) {
        subHeadingsService.getSubHeadings().then(
            function (result) {
                if (result) {
                    viewModel.subHeadings = result;
                }
            },
            function (error) {
                viewModel.errorMessage = 'Error Occurred, Details : ' +
                    JSON.stringify(error);

                throw error;
            });
    }
}

function gsGlobalNavigationPanelController(viewModel, globalViewModel) {
    if (viewModel && globalViewModel) {
        viewModel.authStatus = false;

        globalViewModel.$watch('isAuthenticated',
            function (newValue) {
                viewModel.authStatus = newValue;
            });
    }
}