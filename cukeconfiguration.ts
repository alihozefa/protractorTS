import * as reporter from 'cucumber-html-reporter';
import { Config } from 'protractor';

export let config: Config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  // require feature files
  specs: [
    '../features/calc.feature' // accepts a glob
  ],

  cucumberOpts: {
    // require step definitions
    tags: "@even",
    format: 'json:./cucumberreport.json',
    onComplete: () => {

      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
          "App Version": "0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
        }
      };

      reporter.generate(options);

    },
    require: [
      './stepdefs/*.js' // accepts a glob
    ]
  }
};