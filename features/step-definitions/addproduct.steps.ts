import { Given, When, Then } from '@wdio/cucumber-framework';
import AddproductPage from '../pageobjects/addproduct.page'

Given(/^i log in to the website (.+) with username (.+) and password (.+)$/, async function (url: string, email: string, pwd: string) {
    await browser.url(url)
    await browser.maximizeWindow()

    const sign_in = await $('.login')
    sign_in.click()

    await (await AddproductPage.email_val).setValue(email)
    await (await AddproductPage.password_val).setValue(pwd)

    const sign_button = await $('[name=SubmitLogin]')
    sign_button.click()

});

When(/^i click on the dresses menu$/, async function () {
    await browser.pause(10000)
    //await (await AddproductPage.dressmenu_val).click()
    const dress = await $('//*[@id="block_top_menu"]/ul/li[2]/a')
    dress.click()
    // await browser.pause(5000)
});

Then(/^i validate dress (.+) on page$/, async function (dheader: string) {
    await expect(AddproductPage.dressheader_val).toHaveText(dheader)

});

When(/^i search the dress (.+) and click on add to cart$/, async function (dress: string) {


    const search_val = await $('#search_query_top')
    search_val.setValue(dress)
    await browser.pause(2000)
    const submit_search = await $('[name=submit_search]')
    submit_search.click()
    await browser.pause(30000)
    const product = await $('=Printed Chiffon Dress')
    product.moveTo()
    product.click()
    await browser.pause(2000)
    const addproduct = await $('#add_to_cart')
    addproduct.click()
    await browser.pause(2000)


});

Then(/^i validate the message (.+) displayed on the page$/, async function (message: string) {
    await expect(AddproductPage.header_message).toHaveText(message)
});

When(/^i click on proceed to checkout button$/, async function () {
    await browser.pause(1000)
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