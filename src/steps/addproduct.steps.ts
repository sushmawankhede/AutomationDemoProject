import { Given, When, Then } from '@wdio/cucumber-framework';
import AddproductPage from '../pages/addproduct.page'

Given(/^i log in to the website (.+) with username (.+) and password (.+)$/, async function (url: string, email: string, pwd: string) {
    await browser.url(url)
    await browser.maximizeWindow()

    await (await AddproductPage.sign_in).click()

    await (await AddproductPage.email_val).setValue(email)
    await (await AddproductPage.password_val).setValue(pwd)

    await (await AddproductPage.sign_button).click()

});

When(/^i search the dress (.+) and click on add to cart$/, async function (dress: string) {

    await (await AddproductPage.search_val).setValue(dress)

    await (await AddproductPage.submit_search).waitForDisplayed({ timeout: 1000 });
    await (await AddproductPage.submit_search).click()

    await (await AddproductPage.product).waitForDisplayed({ timeout: 1000 });
    await (await AddproductPage.product).click()

    await (await AddproductPage.addproduct).waitForDisplayed({ timeout: 1000 });
    await (await AddproductPage.addproduct).click()

});

Then(/^i validate the message (.+) displayed on the page$/, async function (message: string) {
    await expect(AddproductPage.header_message).toHaveText(message)
});

When(/^i click on proceed to checkout button$/, async function () {
    await (await (AddproductPage.submitbutton_val)).click()
});

Then(/^i validate the product details (.+),(.+) and (.+)$/, async function (productdescription: string, avail: string, price: string) {
    const productdescription_val = await $('//table/tbody/tr/td[2]/p/a')
    expect(await productdescription_val.getText()).toEqual(productdescription)
    const avail_val = await $('//table/tbody/tr/td[3]/span')
    expect(await avail_val.getText()).toEqual(avail)
    const price_val = await $('//table/tbody/tr/td[6]/span')
    expect(await price_val.getText()).toEqual(price)
});