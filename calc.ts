import{element,browser,by} from 'protractor'
import { async } from 'q';
import { Calc } from './pages/calcPage';

describe("Chain locators and repeaters attribute", function() {

	let calc = new Calc();
	
	var value1:any = 9;
	var value2:any = 5;
	var result:any = value1 - value2;

	function calcular(value1:any, value2:any, operator:any) {

		// enter first value
		calc.firstInput.sendKeys(value1);

		// enter second value
		calc.secondInput.sendKeys(value2);

		// select operator
		selectOperator(operator);

		// click GO
		calc.goButton.click();

	}

	// use of dropdown and attribute called tagName
	function selectOperator(operator) {

		calc.operation.all(by.tagName("option")).each(
				function(items) {

					items.getAttribute("value").then(function(value) {

						if (value == operator) {

							items.click();

						}
					})

				})

	}
	
	//async and await impleted with the unamed function written as ()->
	it('I am in Test Case', async()=> {
		
		await browser.get("https://juliemr.github.io/protractor-demo/");
		
		//ng-modal can be used as by.modal() here
		await calc.firstInput.sendKeys("5");
		await calc.secondInput.sendKeys("9");
		await calc.goButton.click();
		
		//use of promise manually
		/*element(by.css("h2.ng-binding")).getText().then(function(text){
			console.log(text);
		})*/
		await expect(calc.result.getText()).toBe("14");

	})

	// basic concepts
	it("add two numbers", function() {

		browser.get("https://juliemr.github.io/protractor-demo/");

		calcular(9, 5, "SUBTRACTION");

		expect(calc.result.getText()).toBe(result.toString());

	})

	// chain locators concept
	it("use of chain locators", function() {

		// using repeaters tag by.repeater("locator")
		expect(
				calc.resultColumn.getText()).toBe(
				result.toString());

	})

	// all function concept
	it("use of element.all() function", function() {

		calcular(6, 3, "MULTIPLICATION");

		calcular(8, 2, "DIVISION");

		element.all(by.repeater("result in memory")).each(function(items) {

			items.element(by.css("td:nth-child(3)")).getText().then(function(item) {

				console.log("result is: " + item);

			})

		})
	})

})