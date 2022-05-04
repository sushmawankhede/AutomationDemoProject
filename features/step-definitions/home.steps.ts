import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../pageobjects/home.page'


Given(/^I open the browser and load the url (.+)$/, async function (homepageurl: string) {
    await browser.url(homepageurl)
    await browser.maximizeWindow()

});

Then(/^I should see a header with text (.+)$/, async function (headertext: string) {

    await expect(HomePage.header).toHaveText(headertext)
});

Then(/^i should see sign in (.+) link displayed on page$/, async function (signin: string) {
    const signin_val = await $('.login')
    expect(await signin_val.getAttribute("href")).toEqual(signin)

});

When(/^i click on sign in link$/, async function () {

    await (await HomePage.signin_val).click()
});

Then(/^i should see a header with text (.+) displayed on current page$/, async function (createraccountheadertext: string) {

    await expect(HomePage.createaccount_header).toHaveText(createraccountheadertext)
});

When(/^i enter valid email address (.+) in the textbox$/, async function (emailaddress: string) {

    await (await HomePage.emailaddress_val).setValue(emailaddress)
});

When(/^i click on Create an account button$/, async function () {

    await (await HomePage.submitbutton_val).click()
});

Then(/^i should successfully navigate to create account page , should see heading (.+)$/, async function (heading: string) {

    await expect(HomePage.pageheading_val).toHaveText(heading)
});






