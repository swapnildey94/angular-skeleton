'use strict';

(function () {

    var fileDependencies =
        [
            'angular',
            'crmsystem/config',
            'crmsystem/defs/directive-defs',
            'utilities/directive-utils'
        ];

    define(fileDependencies, function () {

        var crmSystemDirectivesModule = angular.module('com.gs.modules.crmsystem.directives',
            [
                'com.gs.modules.crmsystem.config'
            ]);


        // Angular Component Registration to Modules ...

        crmSystemDirectivesModule.directive('gsCustomerViewer',
            [
                'crmSystemDirTemplateUrls',
                gsCustomerViewerDirective
            ]);

        crmSystemDirectivesModule.directive('gsCustomerSearchPanel',
            [
                'crmSystemDirTemplateUrls',
                gsCustomerSearchPanelDirective
            ]);

        crmSystemDirectivesModule.directive('gsCustomerDetailViewer',
            [
                'crmSystemDirTemplateUrls',
                gsCustomerDetailViewerDirective
            ]);

        crmSystemDirectivesModule.directive('gsOrderViewer',
            [
                'crmSystemDirTemplateUrls',
                gsOrderViewerDirective
            ]);

        crmSystemDirectivesModule.directive('gsOrderChartViewer',
            [
                'crmSystemDirTemplateUrls',
                gsOrderChartViewerDirective
            ]);

        crmSystemDirectivesModule.directive('gsStockViewer',
            [
                'crmSystemDirTemplateUrls',
                gsStockViewerDirective
            ]);

        crmSystemDirectivesModule.directive('gsDashboardSwitchPanel',
            [
                'crmSystemDirTemplateUrls',
                gsDashboardSwitchPanelDirective
            ]);

        crmSystemDirectivesModule.directive('gsCreditLimitValidation',
            [
                gsCreditLimitValidationDirective
            ]);
    });

})();