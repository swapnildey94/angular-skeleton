/**
 * Created by Ramkumar on 3/3/2016.
 */
describe('customersControllers test suite',
    function () {
        var moduleName = 'myApp';

        beforeEach(module(moduleName));

        it('customersController test case 1',
            inject(function ($controller, $httpBackend) {
                var scope = {};
                var fakeCustomersData =
                    [
                        {id: 1, name: 'Fake Customer 1', status: true},
                        {id: 2, name: 'Fake Customer 2', status: false}
                    ];
                var customerServiceUrl = 'data/customers.json';

                $httpBackend.expectGET(
                    customerServiceUrl).respond(fakeCustomersData);

                var fakeOrdersData =
                    [
                        {oid: 1, odate: '2005-06-06', cid: 1, amount: 100},
                        {oid: 2, odate: '2005-06-06', cid: 2, amount: 200}
                    ];

                var mockOrderService = {
                    getOrders: function () {
                        return {
                            then: function (successCallback) {
                                successCallback({
                                    data: fakeOrdersData
                                });
                            }
                        };
                    }
                };

                spyOn(mockOrderService, 'getOrders').and.callThrough();

                $controller('customersController', {
                    $scope: scope,
                    customerServiceUrl: customerServiceUrl,
                    orderService: mockOrderService
                });

                $httpBackend.flush();

                expect(scope.customers).toBeDefined();
                expect(scope.customers.length).toBe(2);
                expect(scope.customers).toEqual(fakeCustomersData);
                expect(scope.customers[0].id).toBe(1);

                scope.loadOrders(1);

                expect(scope.orders).toBeDefined();
                expect(scope.orders.length).toBe(1);
                expect(scope.orders[0].oid).toBe(1);
                expect(mockOrderService.getOrders).toHaveBeenCalledTimes(1);
            }));

        afterEach(
            function () {
                console.log('test cleanup completed!');
            });
    });