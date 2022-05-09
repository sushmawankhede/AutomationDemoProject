import { TestCaseHookDefinition } from "@cucumber/cucumber";

export const makeEmailId = async(element:Promise<WebdriverIO.Element> , text : string)=>
{
     

    let length = 6;
    let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength)) 
       }
       let newtext = result+text;
     await (await element).setValue(newtext)
    
}  

