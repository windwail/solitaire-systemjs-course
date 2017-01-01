/* eslint-env node*/

module.exports = function (config) {
    "use strict";

    config.set({

        basePath: "./",

        files: [
            "app/bower_components/angular/angular.js",
            "app/bower_components/angular-route/angular-route.js",
            "app/bower_components/angular-mocks/angular-mocks.js",
            "app/bower_components/underscore/underscore.js"
        ],

        proxies: {
            "/node_modules": "/base/node_modules",
            "/base/cards": "/base/app/cards"
        },

        jspm: {
            config: "app/config.js",
            packages: "app/bower_components/system.js/dist",
            serveFiles: [
                "app/**/*.js",
                "node_modules/babel-core/browser.js"
            ],
            loadFiles: [
                "tests/cards/*.js",
                "tests/klondike/**/*.js"
            ]

        },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        frameworks: ["jspm", "jasmine"],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },

        plugins: [
            'karma-jspm',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],


        junitReporter: {
            outputFile: "test_out/unit.xml",
            suite: "unit"
        }

    });
};
