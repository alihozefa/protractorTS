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
const angularJSHomePage_1 = require("./pages/angularJSHomePage");
describe("open angular js official site and search", () => {
    let angHome = new angularJSHomePage_1.angularJSHome();
    it("open angular JS website", () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
    }));
    it("seach for tutorial", () => __awaiter(void 0, void 0, void 0, function* () {
        yield angHome.searchBox.sendKeys("tutor");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckpTSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2FuZ3VsYXJKU0hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBb0M7QUFDcEMsaUVBQXlEO0FBRXpELFFBQVEsQ0FBQywwQ0FBMEMsRUFBQyxHQUFFLEVBQUU7SUFFcEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBYSxFQUFFLENBQUM7SUFFbEMsRUFBRSxDQUFDLHlCQUF5QixFQUFDLEdBQU8sRUFBRTtRQUNsQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxHQUFPLEVBQUU7UUFDN0IsTUFBTSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUEsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==