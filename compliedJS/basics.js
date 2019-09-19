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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Chain locators and repeaters attribute", function () {
    var value1 = 9;
    var value2 = 5;
    var result = value1 - value2;
    function Calc(value1, value2, operator) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(value1);
        protractor_1.element(protractor_1.by.model("second")).sendKeys(value2);
        selectOperator(operator);
        protractor_1.element(protractor_1.by.id("gobutton")).click();
    }
    function selectOperator(operator) {
        protractor_1.element(protractor_1.by.model("operator")).all(protractor_1.by.tagName("option")).each(function (items) {
            items.getAttribute("value").then(function (value) {
                console.log("Value is: " + value);
                if (value == operator) {
                    items.click();
                }
            });
        });
    }
    it('I am in Test Case', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield protractor_1.element(protractor_1.by.model("first")).sendKeys("5");
        yield protractor_1.element(protractor_1.by.model("second")).sendKeys("9");
        yield protractor_1.element(protractor_1.by.id("gobutton")).click();
        yield expect(protractor_1.element(protractor_1.by.css("h2.ng-binding")).getText()).toBe("14");
    }));
    it("add two numbers", function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        Calc(9, 5, "SUBTRACTION");
        expect(protractor_1.element(protractor_1.by.css("h2.ng-binding")).getText()).toBe(result.toString());
    });
    it("use of chain locators", function () {
        expect(protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)")).getText()).toBe(result.toString());
    });
    it("use of element.all() function", function () {
        Calc(6, 3, "MULTIPLICATION");
        Calc(8, 2, "DIVISION");
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (items) {
            items.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (item) {
                console.log("result is: " + item);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRzVDLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUVsRCxJQUFJLE1BQU0sR0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQU8sQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFakMsU0FBUyxJQUFJLENBQUMsTUFBVSxFQUFFLE1BQVUsRUFBRSxRQUFZO1FBR2pELG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc1QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHN0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3pCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFHRCxTQUFTLGNBQWMsQ0FBQyxRQUFRO1FBRS9CLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMxRCxVQUFTLEtBQUs7WUFFYixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7Z0JBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUVsQyxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBRXRCLEtBQUssQ0FBQyxLQUFLLEVBQUUs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