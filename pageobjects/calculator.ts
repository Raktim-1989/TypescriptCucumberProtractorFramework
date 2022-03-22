import { element, ElementFinder, by, ElementArrayFinder } from "protractor";


export class calculator 
{
    firsteditbox : ElementFinder;
    secondeditbox : ElementFinder;
    go : ElementFinder;
    getresult : ElementArrayFinder;

    constructor()
    {
        this.firsteditbox = element(by.model("first"));
        this.secondeditbox = element(by.model("second"));
        this.go = element(by.id("gobutton"));
        this.getresult = element.all(by.repeater("result in memory"))
    }
    
}