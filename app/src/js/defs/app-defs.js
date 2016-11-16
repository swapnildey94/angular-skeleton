/**
 * Created by Ramkumar on 3/3/2016.
 */

'use strict';

function initializeAppModule(logService, globalViewModel) {
    if (logService && globalViewModel) {
        globalViewModel.appInitTime = new Date();

        logService.info("Application Initialized!");
    }
}