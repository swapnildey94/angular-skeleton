/**
 * Created by Ramkumar on 3/2/2016.
 */
angular.module('myApp', [])
    .constant('customerServiceUrl', 'data/customers.json')
    .controller('customersController',
        function ($scope, $http, customerServiceUrl, orderService) {
            $http.get(customerServiceUrl).success(
                function (result) {
                    $scope.customers = result;
                });

            $scope.loadOrders = function (cid) {
                orderService.getOrders().then(
                    function (result) {
                        if (result && result.data) {
                            var filteredOrders = [];

                            for (var index in result.data) {
                                var order = result.data[index];

                                if (order.cid === cid) {
                                    filteredOrders.push(order);
                                }
                            }

                            $scope.orders = filteredOrders;
                        }
                    },
                    function (error) {
                        $scope.errorMessage = "Error Occurred, Details : " +
                            JSON.stringify(error);
                    });
            };
        })
    .constant('symbols', {
        check: '\u2713',
        cross: '\u2718'
    })
    .filter('gsStatus',
        function (symbols) {
            return function (bindingValue) {
                return bindingValue ? symbols.check : symbols.cross;
            }
        })
    .constant('orderServiceUrl', 'data/orders.json')
    .factory('orderService',
        function ($http, orderServiceUrl) {
            return {
                getOrders: function () {
                    return $http.get(orderServiceUrl);
                }
            };
        })
    .run(function ($log) {
        if ($log) {
            $log.info("Application Initialized!");
        }
    });