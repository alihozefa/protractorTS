"use strict";
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
    it('I am in Test Case', function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/");
        protractor_1.element(protractor_1.by.model("first")).sendKeys("5");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("9");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        expect(protractor_1.element(protractor_1.by.css("h2.ng-binding")).getText()).toBe("14");
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYmFzaWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTRDO0FBRTVDLFFBQVEsQ0FBQyx3Q0FBd0MsRUFBRTtJQUVsRCxJQUFJLE1BQU0sR0FBTyxDQUFDLENBQUM7SUFDbkIsSUFBSSxNQUFNLEdBQU8sQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFPLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFFakMsU0FBUyxJQUFJLENBQUMsTUFBVSxFQUFFLE1BQVUsRUFBRSxRQUFZO1FBR2pELG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUc1QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFHN0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3pCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXBDLENBQUM7SUFHRCxTQUFTLGNBQWMsQ0FBQyxRQUFRO1FBRS9CLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMxRCxVQUFTLEtBQUs7WUFFYixLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7Z0JBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO2dCQUVsQyxJQUFJLEtBQUssSUFBSSxRQUFRLEVBQUU7b0JBRXRCLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFFZDtZQUNGLENBQUMsQ0FBQyxDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFFTCxDQUFDO0lBRUQsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBRXZCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFHMUQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQU1uQyxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0QsQ0FBQyxDQUFDLENBQUE7SUFHRixFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFFckIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUUxQixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3JELE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBRzNCLE1BQU0sQ0FDSixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FDOUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBRXRCLENBQUMsQ0FBQyxDQUFBO0lBR0YsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBRW5DLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFdkIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUUvRCxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBRXBFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRW5DLENBQUMsQ0FBQyxDQUFBO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVILENBQUMsQ0FBQyxDQUFBIn0=