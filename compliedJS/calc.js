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
const calcPage_1 = require("./pages/calcPage");
describe("Chain locators and repeaters attribute", function () {
    let calc = new calcPage_1.Calc();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NhbGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEM7QUFFNUMsK0NBQXdDO0FBRXhDLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUVsRCxJQUFJLElBQUksR0FBRyxJQUFJLGVBQUksRUFBRSxDQUFDO0lBRXRCLElBQUksTUFBTSxHQUFPLENBQUMsQ0FBQztJQUNuQixJQUFJLE1BQU0sR0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUVqQyxTQUFTLFFBQVEsQ0FBQyxNQUFVLEVBQUUsTUFBVSxFQUFFLFFBQVk7UUFHckQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHbEMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUdELFNBQVMsY0FBYyxDQUFDLFFBQVE7UUFFL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0MsVUFBUyxLQUFLO1lBRWIsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO2dCQUU5QyxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBRXRCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFFZDtZQUNGLENBQUMsQ0FBQyxDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDO0lBR0QsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQU8sRUFBRTtRQUVoQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFHaEUsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQU01QixNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFFckIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUUxRCxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUV2RCxDQUFDLENBQUMsQ0FBQTtJQUdGLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTtRQUczQixNQUFNLENBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDakMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFdEIsQ0FBQyxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsK0JBQStCLEVBQUU7UUFFbkMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVqQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUUzQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBRS9ELEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtnQkFFcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFFbkMsQ0FBQyxDQUFDLENBQUE7UUFFSCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBRUgsQ0FBQyxDQUFDLENBQUEifQ==