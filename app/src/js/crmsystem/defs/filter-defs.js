'use strict';

function gsPhotoUrlFilter(photoBaseUrl) {
    var filterLogic = function (bindingValue) {
        if (bindingValue) {
            var url = photoBaseUrl + "/Customer" +
                bindingValue + ".jpg";

            return url;
        }
    };

    return filterLogic;
}

function gsStatusFilter(symbols) {
    var filterLogic = function (bindingValue) {
        return bindingValue ? symbols.check : symbols.cross;
    };

    return filterLogic;
}

function gsHealthFilter() {
    var filterLogic = function (bindingValue, threshold) {
        return bindingValue >= threshold;
    };

    return filterLogic;
}