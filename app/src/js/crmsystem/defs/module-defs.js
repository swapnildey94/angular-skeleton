'use strict';

function initializeCrmSystemModule(logService, globalViewModel) {
    if (logService && globalViewModel) {
        globalViewModel.crmSystemInitTime = new Date();
        globalViewModel.authRequired = true;

        logService.info("CRM System Module Initialized!");
    }
}