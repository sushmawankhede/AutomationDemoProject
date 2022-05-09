import { Given, When, Then } from '@wdio/cucumber-framework';
import RegisterPage from '../../src/pages/register.page'

Given(/^I open the browser and load the url \"([^\"]*)\"$/, async function (url: string) {
    await browser.url(url)
    await browser.maximizeWindow()

});

When(/^i click on sign in link$/, async function () {
    const signin_val = await $('.login')
    signin_val.click()

});

When(/^i enter valid email address (.+)$/, async function (emailaddress: string) {
     const emailaddress_input = $('[name=email_create]')
    await (await emailaddress_input).setValue(emailaddress)
   // await (await RegisterPage.emailaddress_input).setValue(emailaddress)
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
    const fname_input = $('[name=customer_firstname]')
    const lname_input = $('[name=customer_lastname]')

    await (await fname_input).setValue(fname)
    await (await lname_input).setValue(lname)
});

Then(/^i validate my email id (.+) is autopulated$/, async function (emailaddress: string) {
    const emailid_val = await $('[name=email]')
    expect(await emailid_val.getAttribute('value')).toEqual(emailaddress)
});

When(/^i enter password (.+)$/, async function (password) {
    const password_input = $('[name=passwd]')
    await (await password_input).setValue(password)
});

When(/^i navigate to your address section , fill out mandatory details$/, function () {

});

When(/^i enter fname (.+) and lname (.+)$/, async function (fname_add: string, lname_add: string) {
    const fname_add_input = $('[name=customer_firstname]')
    const lname_add_input = $('[name=customer_lastname]')

    await (await fname_add_input).setValue(fname_add)
    await (await lname_add_input).setValue(lname_add)

});

When(/^i enter address details (.+),(.+),(.+),(.+),(.+)$/, async function (address: string, city: string, state: string, zip: string, country: string) {

    const address_input = $('[name=address1]')
    await (await address_input).setValue(address)

    const city_input = $('[name=city]')
    await (await city_input).setValue(city)

    const state_input = $('#id_state')
    await (await state_input).selectByVisibleText(state)
    await browser.pause(5000)

    const zip_input = $('[name=postcode]')
    await (await zip_input).setValue(zip)

    const country_input = $('#id_country')
    await (await country_input).selectByVisibleText(country)
    await browser.pause(5000)
});

When(/^i enter valid mobile number (.+)$/, async function (mobilenumber: string) {

    const mobile_input = $('input[name*=phone_mobile]')
    await (await mobile_input).setValue(mobilenumber)

});

When(/^i click on register button$/, async function () {
    const submit_account_button = $('#submitAccount')
    submit_account_button.click()
});

Then(/^i validate firstname lastname (.+) dispalyed on landing page$/, async function (fnamelanme) {
    const fnamelanme_val = $('a.account > span')
    expect(await fnamelanme_val.getText()).toEqual(fnamelanme)
});