module.exports = function (config) {
    config.set({
        basePath: './',
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/src/js/*.js',
            'app/src/js/**/*.js',
            'tests/unit/controllers/*.js',
            'tests/unit/services/*.js',
            'tests/unit/filters/*.js',
            'tests/unit/**/*.js'
        ],
        autoWatch: true,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        //browsers: ['Chrome'],
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        reporters: ['progress', 'coverage'],
        preprocessors: {
            'app/src/**/*.js': ['coverage']
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        phantomjsLauncher: {
            exitOnResourceError: true
        }
    });
};
