import { ElementFinder, element, by } from "protractor";

export class Calc{

    firstInput:ElementFinder;
    secondInput:ElementFinder;
    operation:ElementFinder;
    goButton:ElementFinder;
    result:ElementFinder;
    resultColumn:ElementFinder;

    constructor(){
        this.firstInput=element(by.model("first"));
        this.secondInput=element(by.model("second"));
        this.operation=element(by.model("operator"));
        this.goButton=element(by.id("gobutton"));
        this.result=element(by.css("h2.ng-binding"));
        this.resultColumn=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}