/**
 * Created by Ramkumar on 3/3/2016.
 */
describe('ui test suite 1', function () {
    beforeEach(function () {
        browser.get('/src');
    });

    it('test case 1', function () {
        browser.getLocationAbsUrl().then(
            function (url) {
                var expectedUrl = '';

                expect(url).toBe(expectedUrl);
            });
    });

    it('test case 2', function () {
        var customers = element.all(by.repeater('customer in customers'));

        expect(customers.count()).toBe(7);

        browser.driver.sleep(1000);

        var searchString = element(by.model('searchString'));
        searchString.sendKeys('kel');
        expect(customers.count()).toBe(1);

        browser.driver.sleep(1000);
        searchString.clear();

        expect(customers.count()).toBe(7);
    });

    afterEach(function () {
        console.log('test cleanup completed!');
    });
});