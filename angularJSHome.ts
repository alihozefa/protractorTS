import { async } from "q"
import { browser } from "protractor"
import { angularJSHome } from "./pages/angularJSHomePage"

describe("open angular js official site and search",()=>{

    let angHome = new angularJSHome();

    it("open angular JS website",async()=>{
        await browser.get("https://angular.io/");
    })

    it("seach for tutorial",async()=>{
        await angHome.searchBox.sendKeys("tutor");
    })
})