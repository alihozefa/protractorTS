"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const calcPage_1 = require("../pages/calcPage");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calcPage_1.Calc();
cucumber_1.Given('Calculator home page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
}));
cucumber_1.When('I try to add {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstInput.sendKeys(string);
    yield calc.secondInput.sendKeys(string2);
    yield calc.goButton.click();
}));
cucumber_1.Then('the sum displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(3000);
    yield calc.result.getText().then(function (resultText) {
        expect(resultText).to.equal(string);
    });
}));
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY1N0ZXBEZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmcy9jYWxjU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUE2QztBQUM3QywyQ0FBcUM7QUFDckMsZ0RBQXlDO0FBQ3pDLGdEQUF3QjtBQUN4QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksSUFBSSxHQUFHLElBQUksZUFBSSxFQUFFLENBQUM7QUFDdEIsZ0JBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFRLEVBQUU7SUFDcEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsb0NBQW9DLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDL0QsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNoQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHNDQUFzQyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDeEQsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLFVBQVU7UUFDaEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsU0FBUyxLQUFLLENBQUMsRUFBVTtJQUNyQixPQUFPLElBQUksT0FBTyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDO0FBQzdELENBQUMifQ==