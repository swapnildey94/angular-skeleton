'use strict';

function configureCommonDecorators(provideService) {
    if (provideService) {
        provideService.decorator('gsSubHeadingsService',
            [
                '$delegate',
                '$cacheFactory',
                '$log',
                '$window',
                '$q',
                gsSubHeadingsServiceDecorator
            ]);
    }
}

function gsSubHeadingsServiceDecorator(delegate, cacheFactory, logService, browser, promiseService) {
    var validation = delegate && cacheFactory &&
        logService && browser && promiseService;
    var CACHE_CONTAINER = "subHeadingsCacheContainer";
    var CACHE_KEY = "subHeadingsCache";

    if (validation) {
        var realServiceImpl = delegate.getSubHeadings;
        var subHeadingsCacheFactory = cacheFactory(CACHE_CONTAINER, {
            capacity: 3
        });

        delegate.getSubHeadings = function () {
            var subHeadingsCache = subHeadingsCacheFactory.get(CACHE_KEY);
            var deferred = promiseService.defer();

            if (subHeadingsCache) {
                logService.info("Cache Found ... and Using ...");

                deferred.resolve(subHeadingsCache);
            } else {
                logService.info("Cache Not Found ...");

                realServiceImpl().then(
                    function (data) {
                        if (data) {
                            subHeadingsCacheFactory.put(CACHE_KEY, data);
                            deferred.resolve(data);
                        } else {
                            deferred.reject();
                        }
                    },
                    function (error) {
                        deferred.reject(error);
                    });
            }

            return deferred.promise;
        };
    }

    return delegate;
}