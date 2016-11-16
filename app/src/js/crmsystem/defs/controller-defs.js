'use strict';

function gsCrmSystemHomeViewController(viewModel, customerService, pushNotificationService) {
    var validation = viewModel && customerService && pushNotificationService;

    if (validation) {

        pushNotificationService.registerCallback(
            function (notificationData) {
                if (notificationData && viewModel && viewModel.customers) {
                    viewModel.$apply(
                        function () {
                            viewModel.customers.push(notificationData);
                        });
                }
            });

        customerService.getCustomers().then(
            function (data) {
                if (data) {
                    viewModel.customers = data;
                }
            },
            function (error) {
                viewModel.errorMessage = "Error Occurred, Details : " +
                    JSON.stringify(error);

                throw error;
            });
    }
}

function gsCrmSystemDashboardHomeViewController(viewModel, stateParameters, promiseService, stateService,
                                                customerService, orderService, crmSystemEvents) {

    var DASHBOARD_VIEW = "crmdashboard";
    var validation = viewModel && stateParameters && customerService &&
        promiseService && orderService && stateService && crmSystemEvents;

    if (validation) {

        viewModel.$on(crmSystemEvents.DASHBOARD_SWITCH_EVENT,
            function (eventInfo, eventData) {
                if (eventData) {
                    stateService.go(DASHBOARD_VIEW, {
                        customerId: eventData
                    });
                }
            });

        var selectedCustomerId = stateParameters.customerId;
        var errorCallback = function (error) {
            viewModel.errorMessage = "Error Occurred, Details : " +
                JSON.stringify(error);

            throw error;
        };

        if (selectedCustomerId) {
            var customerPromise = customerService.getCustomer(selectedCustomerId);
            var orderPromise = orderService.getOrders(selectedCustomerId);

            promiseService.all([customerPromise, orderPromise]).then(
                function (results) {
                    if (results) {
                        viewModel.customer = results[0];
                        viewModel.orders = results[1];
                    }
                }, errorCallback);
        }
    }
}

function gsOrderChartViewerController(viewModel, dataTransformer) {
    if (viewModel && dataTransformer) {
        viewModel.$watch('ordersList',
            function (newValue) {
                if (newValue) {
                    viewModel.ordersChartData =
                        dataTransformer.transform(viewModel.ordersList);
                }
            });
    }
}

function gsStockViewerController(viewModel, timer, browser, stockQuoteService) {
    var DEFAULT_REFRESH_INTERVAL = 4000;
    var MAX_LIMIT = 6;
    var GAUGE_DIVIDER = MAX_LIMIT;

    var validation = viewModel && timer &&
        browser && stockQuoteService;

    if (validation) {
        viewModel.refreshInterval = DEFAULT_REFRESH_INTERVAL;
        viewModel.stockQuoteHistory = [];
        viewModel.gaugeData = {
            value: 0,
            lowerLimit: 0,
            upperLimit: MAX_LIMIT,
            precision: 2,
            valueUnit: '¥ ',
            ranges: [
                {
                    min: 0,
                    max: 1.5,
                    color: '#DEDEDE'
                },
                {
                    min: 1.5,
                    max: 2.5,
                    color: '#8DCA2F'
                },
                {
                    min: 2.5,
                    max: 3.5,
                    color: '#FDC702'
                },
                {
                    min: 3.5,
                    max: 4.5,
                    color: '#FF7700'
                },
                {
                    min: 4.5,
                    max: 6.0,
                    color: '#C50200'
                }
            ]
        };

        var initializeQuotation = function () {
            var quotation = stockQuoteService.getStockQuote(viewModel.companyName);

            viewModel.quotation = quotation;
            viewModel.stockQuoteHistory.unshift({
                time: new Date(),
                quotation: quotation
            });

            if (viewModel.gaugeData) {
                viewModel.gaugeData.value = Math.floor(quotation % GAUGE_DIVIDER);
            }
        };

        var timerObj = null;

        viewModel.$watch('refreshInterval',
            function (newValue) {
                if (newValue) {
                    if (timerObj) {
                        browser.clearInterval(timerObj.$$intervalId);
                    }

                    timerObj = timer(initializeQuotation, viewModel.refreshInterval);
                }
            });
    }
}


function gsDashboardSwitchPanelController(viewModel, crmSystemEvents) {
    if (viewModel && crmSystemEvents) {
        viewModel.switch = function (selectedCustomerId) {
            viewModel.$emit(crmSystemEvents.DASHBOARD_SWITCH_EVENT, selectedCustomerId);
        };
    }
}

function gsCrmSystemNewCustomerHomeViewController(viewModel, timeout, stateService,
                                                  customerService, redirectDetails) {

    var validation = viewModel && timeout &&
        stateService && customerService && redirectDetails;

    if (validation) {
        viewModel.customerRecord = {
            id: customerService.generateNewId(),
            status: true
        };

        viewModel.phoneNumberPattern = /^\d{3}-\d{5}$/;
        viewModel.customerCreditLimits = {
            minimum: 1000,
            maximum: 10000
        };

        viewModel.saveStatus = false;
        viewModel.saveCustomerRecord = function (customerForm) {
            if (customerForm && customerForm.$valid) {
                customerService.saveCustomer(viewModel.customerRecord).then(
                    function (result) {
                        if (result) {
                            viewModel.saveStatus = true;

                            timeout(function () {
                                stateService.go(redirectDetails.redirectTo);
                            }, redirectDetails.timeoutPeriod);
                        }
                    },
                    function (error) {
                        viewModel.saveStatus = false;
                        viewModel.errorMessage = "Error Occurred, Details : " +
                            JSON.stringify(error);

                        throw error;
                    });
            }
        };
    }
}