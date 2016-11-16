'use strict';

function gsGlobalErrorHandlingService(logService) {
    var errorHandler = function (exception, cause) {
        var message = 'Error Occurred, Details : ' + exception.message;

        if (cause) {
            message += ', Cause : ' + cause;
        }

        logService.error(message);
    };

    return errorHandler;
}

function gsGlobalLoggingService(browser) {
    var generateLogId = function () {
        var MIN_ID = 1;
        var MAX_ID = 1000000;
        var generatedId = Math.floor(
            Math.random() * (MAX_ID - MIN_ID) + MIN_ID);

        return generatedId;
    };

    var logMessage = function (message, type) {
        var logId = generateLogId();
        var logKey = type + "-" + logId;
        var formattedMessage = logKey + ":" +
            new Date().toString() + ":" + message.toString().toUpperCase();

        browser.localStorage.setItem(logKey, formattedMessage);
    };

    var serviceDefinition = {};

    if (browser) {
        serviceDefinition = {
            log: function (message) {
                logMessage(message, "LOG");
            },
            info: function (message) {
                logMessage(message, "INFO");
            },
            warn: function (message) {
                logMessage(message, "WARN");
            },
            debug: function (message) {
                logMessage(message, "DEBUG");
            },
            verbose: function (message) {
                logMessage(message, "VERBOSE");
            }
        };
    }

    return serviceDefinition;
}
