'use strict';

function gsChartRendererController(viewModel) {
    if (viewModel) {
        viewModel.$watch('chartData',
            function (newValue) {
                var c3 = require('c3');

                if (newValue && c3) {
                    c3.generate({
                        bindto: viewModel.targetDomElement,
                        data: {
                            columns: viewModel.chartData,
                            type: viewModel.chartType
                        }
                    });
                }
            });
    }
}