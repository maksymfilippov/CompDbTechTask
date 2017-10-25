const _ = require('lodash'),
    envConfig = require('./support/conf');

exports.config = _.merge(envConfig.config, {
    baseUrl: 'http://computer-database.herokuapp.com/computers',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    cucumberOpts: {
        require: './../step_definitions',
        tags: '@validation',
        format: 'pretty',
    },
    specs: ['./../features/computer.feature'],

    params: {
        cucumberStepTimeout: 300 * 1000
    },
    onPrepare: function() {
        browser.ignoreSynchronization = true;
    }
});