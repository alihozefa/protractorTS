import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { Calc } from "../pages/calcPage";
import chai from "chai";
var expect = chai.expect;

let calc = new Calc();
Given('Calculator home page', async ()=> {
    await browser.get("https://juliemr.github.io/protractor-demo/");
});

When('I try to add {string} and {string}', async(string, string2)=> {
    await calc.firstInput.sendKeys(string);
    await calc.secondInput.sendKeys(string2);
    await calc.goButton.click();
});

Then('the sum displayed should be {string}', async(string)=> {
    await delay(3000);
    await calc.result.getText().then(function(resultText){
        expect(resultText).to.equal(string);
    })
});

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}