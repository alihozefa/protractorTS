import { ElementFinder, element, by } from "protractor";

export class angularJSHome{
    tryNewLink:ElementFinder;
    searchBox:ElementFinder;
    tutorialLink:ElementFinder;

    constructor(){
        this.tryNewLink=element(by.partialLinkText("Try the New Angul"));
        this.searchBox=element(by.xpath("//input[@placeholder='Search']"));
        //this.tutorialLink=element(by.partialLinkText("Tour of Heroes App"));
    }
}