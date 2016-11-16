'use strict';

function initializeCommonModule(logService, globalViewModel) {
    if(logService && globalViewModel) {
        globalViewModel.isAuthenticated = false;

        logService.info("Common Module Initialized!");
    }
}