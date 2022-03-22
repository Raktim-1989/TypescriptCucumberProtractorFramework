import { ElementFinder , element , by } from "protractor";

export class angularhomepage 
{

   angularlink : ElementFinder;
   
   constructor()
   {
       this.angularlink = element(by.css("div[class = 'text-center'] a:nth-child(1)"));
   }
}