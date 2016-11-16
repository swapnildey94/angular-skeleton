'use strict';

function gsCustomerService(restService, serviceUrls) {
    var serviceDefinition = {};

    if (restService && serviceUrls) {
        var customerServiceUrl = serviceUrls.baseUrl +
            serviceUrls.customers.baseUrl +
            serviceUrls.customers.queryAndSave;
        var customerRestService = restService(customerServiceUrl);

        serviceDefinition = {
            getCustomers: function () {
                return customerRestService.query().$promise;
            },
            getCustomer: function (id) {
                return customerRestService.get({
                    customerId: id
                }).$promise;
            },
            saveCustomer: function (customerDetail) {
                return customerRestService.save(customerDetail).$promise;

            },
            generateNewId: function () {
                var MIN_ID = 11;
                var MAX_ID = 21;
                var generatedId = Math.floor(
                    Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

                return generatedId;
            }
        };
    }

    return serviceDefinition;
}

function gsOrderService(restService, serviceUrls) {
    var serviceDefinition = {};

    if (restService && serviceUrls) {
        var orderServiceUrl = serviceUrls.baseUrl +
            serviceUrls.orders.baseUrl +
            serviceUrls.orders.queryAndSave;
        var orderRestService = restService(orderServiceUrl);

        serviceDefinition = {
            getOrders: function (customerId) {
                return orderRestService.query({
                    customerId: customerId
                }).$promise;
            }
        };
    }

    return serviceDefinition;
}

function gsOrdersChartDataTransformer() {
    var serviceDefinition = {
        transform: function (orders) {
            var ordersChartData = [];

            if (orders) {
                var orderIds = ['Order #'];
                var orderAmounts = ['Amount'];

                for (var index in orders) {
                    var order = orders[index];

                    if (order && order.orderId && order.amount) {
                        orderIds.push(order.orderId);
                        orderAmounts.push(order.amount);
                    }
                }

                ordersChartData = [orderIds, orderAmounts];
            }

            return ordersChartData;
        }
    };

    return serviceDefinition;
}

function gsStockQuoteService() {
    var serviceDefinition = {
        isFortune500Company: function (companyName) {
            var listedCompanies = ['Adventureworks', 'Footmart', 'ePublishers'];
            var status = false;

            if (companyName) {
                for (var index in listedCompanies) {
                    if (listedCompanies[index] === companyName) {
                        status = true;
                        break;
                    }
                }
            }

            return status;
        },
        getStockQuote: function (companyName) {
            var MIN_QUOTE = 100;
            var MAX_QUOTE = 1000;
            var BONUS_POINTS = 50;
            var quote = 0;

            if (companyName) {
                quote = Math.floor(
                    Math.random() * (MAX_QUOTE - MIN_QUOTE) + MIN_QUOTE);

                if (this.isFortune500Company(companyName))
                    quote += BONUS_POINTS;
            }

            return quote;
        }
    };

    return serviceDefinition;
}

function gsPushNotificationService(notificationUrlProvider) {
    var NOTIFICATION_EVENT = "newCustomerRecord";

    if (notificationUrlProvider) {
        var subscribedCallbacks = [];

        this.registerCallback = function (callback) {
            if (callback) {
                subscribedCallbacks.push(callback);
            }
        };

        var io = require('socket.io');
        var notificationUrl = notificationUrlProvider.getNotificationUrl();
        var notificationClient = io.connect(notificationUrl);

        if (notificationClient) {
            notificationClient.on(NOTIFICATION_EVENT,
                function (notificationData) {
                    for (var index in subscribedCallbacks) {
                        var callback = subscribedCallbacks[index];

                        callback(notificationData);
                    }
                });
        }
    }
}

function gsPushNotificationUrlProvider(browser) {
    var serviceDefinition = {};

    if (browser) {
        serviceDefinition = {
            getNotificationUrl: function () {
                var url = browser.location.protocol + "//" +
                    browser.location.hostname + ":" +
                    browser.location.port;

                return url;
            }
        }
    }

    return serviceDefinition;
}