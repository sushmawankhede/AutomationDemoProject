import { Given, When, Then } from '@wdio/cucumber-framework';
import RegisterPage from '../pages/register.page'
import { makeEmailId } from '../utils/Helpers';

Given(/^I open the browser and load the url \"([^\"]*)\"$/, async function (url: string) {
    await browser.url(url)
    await browser.maximizeWindow()

});

When(/^i click on sign in link$/, async function () {
    const signin_val = await $('.login')
    signin_val.click()


});

When(/^i enter valid email address (.+)$/, async function (domain: string) {

    await (makeEmailId(RegisterPage.emailaddress_val, domain))
});

When(/^i click on Create an account button$/, async function () {

    await (await RegisterPage.submitbutton).click()
});

Then(/^i successfully land on create account page , see heading \"([^\"]*)\"$/, async function (heading: string) {
    const pageheading = $('h1.page-heading')
    expect(await pageheading.getText()).toEqual(heading)
});

When(/^i select gender title (.+)$/, async function (gendertitle: string) {
    const gender_radio = await $$('[name=id_gender]')

    for (let i = 0; i < gender_radio.length; i++) {
        const element = await (gender_radio[i].getAttribute('value'));
        if (element == gendertitle) {
            await (gender_radio[i]).click()
            break;
        }
    }
});

When(/^i enter first name (.+) and last name (.+)$/, async function (fname: string, lname: string) {

    await (await RegisterPage.fname_input).setValue(fname)
    await (await RegisterPage.lname_input).setValue(lname)

});

Then(/^i validate my email id (.+) is autopulated$/, async function (domain: string) {
    const emailid_val = await $('[name=email]')
    expect(await emailid_val.getAttribute('value')).toContain(domain)
});

When(/^i enter password (.+)$/, async function (password) {

    await (await RegisterPage.password_input).setValue(password)
});

When(/^i navigate to your address section , fill out mandatory details$/, function () {

});

When(/^i enter fname (.+) and lname (.+)$/, async function (fname_add: string, lname_add: string) {

    await (await RegisterPage.fname_add_input).setValue(fname_add)
    await (await RegisterPage.lname_add_input).setValue(lname_add)

});

When(/^i enter address details (.+),(.+),(.+),(.+),(.+)$/, async function (address: string, city: string, state: string, zip: string, country: string) {


    await (await RegisterPage.address_input).setValue(address)
    await (await RegisterPage.city_input).setValue(city)
    await (await RegisterPage.state_input).selectByVisibleText(state)
    await (await RegisterPage.zip_input).setValue(zip)
    await (await RegisterPage.country_input).selectByVisibleText(country)

});

When(/^i enter valid mobile number (.+)$/, async function (mobilenumber: string) {


    await (await RegisterPage.mobile_input).setValue(mobilenumber)

});

When(/^i click on register button$/, async function () {


    await (await RegisterPage.submit_account_button).waitForDisplayed({ timeout: 1000 });
    await (await RegisterPage.submit_account_button).click()
});

Then(/^i validate firstname lastname (.+) dispalyed on landing page$/, async function (fnamelanme) {

    expect(await RegisterPage.fnamelanme_val.getText()).toEqual(fnamelanme)
});