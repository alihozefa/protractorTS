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
const calc_1 = require("./pages/calc");
describe("Chain locators and repeaters attribute", function () {
    let calc = new calc_1.Calc();
    var value1 = 9;
    var value2 = 5;
    var result = value1 - value2;
    function calcular(value1, value2, operator) {
        calc.firstInput.sendKeys(value1);
        calc.secondInput.sendKeys(value2);
        selectOperator(operator);
        calc.goButton.click();
    }
    function selectOperator(operator) {
        calc.operation.all(protractor_1.by.tagName("option")).each(function (items) {
            items.getAttribute("value").then(function (value) {
                if (value == operator) {
                    items.click();
                }
            });
        });
    }
    it('I am in Test Case', () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        yield calc.firstInput.sendKeys("5");
        yield calc.secondInput.sendKeys("9");
        yield calc.goButton.click();
        yield expect(calc.result.getText()).toBe("14");
    }));
    it("add two numbers", function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        calcular(9, 5, "SUBTRACTION");
        expect(calc.result.getText()).toBe(result.toString());
    });
    it("use of chain locators", function () {
        expect(calc.resultColumn.getText()).toBe(result.toString());
    });
    it("use of element.all() function", function () {
        calcular(6, 3, "MULTIPLICATION");
        calcular(8, 2, "DIVISION");
        protractor_1.element.all(protractor_1.by.repeater("result in memory")).each(function (items) {
            items.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (item) {
                console.log("result is: " + item);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTRDO0FBRTVDLHVDQUFvQztBQUVwQyxRQUFRLENBQUMsd0NBQXdDLEVBQUU7SUFFbEQsSUFBSSxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUV0QixJQUFJLE1BQU0sR0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQU8sQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFakMsU0FBUyxRQUFRLENBQUMsTUFBVSxFQUFFLE1BQVUsRUFBRSxRQUFZO1FBR3JELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR2pDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR2xDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUd6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXZCLENBQUM7SUFHRCxTQUFTLGNBQWMsQ0FBQyxRQUFRO1FBRS9CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQzNDLFVBQVMsS0FBSztZQUViLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztnQkFFOUMsSUFBSSxLQUFLLElBQUksUUFBUSxFQUFFO29CQUV0QixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBRWQ7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUVILENBQUMsQ0FBQyxDQUFBO0lBRUwsQ0FBQztJQUdELEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxHQUFPLEVBQUU7UUFFaEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBR2hFLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFNNUIsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoRCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBRXJCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFFMUQsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFdkQsQ0FBQyxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsdUJBQXVCLEVBQUU7UUFHM0IsTUFBTSxDQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBRW5DLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFakMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFM0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUUvRCxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRW5DLENBQUMsQ0FBQyxDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=