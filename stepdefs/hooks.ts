import { Before, After } from 'cucumber';
import { browser } from 'protractor';

//execute before every test scenarios
Before(function () {
    browser.manage().window().maximize();
});

//execute before @even tags test scenarios only
Before({ tags: "@even" }, function () {
    console.log("executing before even test scenario.");
});

//execute before @odd tags test scenarios only
Before({ tags: "@odd" }, function () {
    console.log("executing before odd test scenario.");
});

//execute after every test scenario
After(function () {
    console.log("Test is completed.");
});