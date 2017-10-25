'use strict';

exports.config = {
    seleniumArgs: ['-browserTimeout=60'],
    ignoreProtectedModeSettings: true,
    capabilities: { 'browserName': 'chrome' },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        format: 'json:cucumber_report.json'
    },
};