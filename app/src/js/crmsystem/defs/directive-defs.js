'use strict';

function gsCustomerViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            customerInfo: '='
        };

        return createDirective(templateUrls.customerViewer, scope);
    }
}

function gsCustomerSearchPanelDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            searchString: '='
        };

        return createDirective(templateUrls.customerSearchPanel, scope);
    }
}

function gsCustomerDetailViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            customerDetail: '='
        };

        return createDirective(templateUrls.customerDetailViewer, scope);
    }
}

function gsOrderViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            ordersList: '='
        };

        return createDirective(templateUrls.orderViewer, scope);
    }
}

function gsOrderChartViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            ordersList: '='
        };
        var controller = 'gsOrderChartViewerController';

        return createDirective(templateUrls.orderChartViewer, scope, controller);
    }
}

function gsOrderChartViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            ordersList: '='
        };
        var controller = 'gsOrderChartViewerController';

        return createDirective(templateUrls.orderChartViewer, scope, controller);
    }
}

function gsStockViewerDirective(templateUrls) {
    if (templateUrls) {
        var scope = {
            companyName: '='
        };
        var controller = 'gsStockViewerController';

        return createDirective(templateUrls.stockViewer, scope, controller);
    }
}

function gsDashboardSwitchPanelDirective(templateUrls) {
    if (templateUrls) {
        var scope = null;
        var controller = 'gsDashboardSwitchPanelController';

        return createDirective(templateUrls.dashboardSwitchPanel, scope, controller);
    }
}

function gsCreditLimitValidationDirective() {
    var templateUrl = null;
    var scope = {
        minimumLimit: '=',
        maximumLimit: '='
    };

    var directiveDefinition = createDirective(templateUrl, scope);

    directiveDefinition.require = 'ngModel';
    directiveDefinition.link =
        function (viewModel, domElement, domAttributes, ngModel) {
            if (ngModel) {
                ngModel.$validators.gsCreditLimitValidation =
                    function (modelValue) {
                        var status = false;

                        if (modelValue) {
                            status = modelValue >= viewModel.minimumLimit &&
                                modelValue <= viewModel.maximumLimit;
                        }

                        return status;
                    }
            }
        };

    return directiveDefinition;
}