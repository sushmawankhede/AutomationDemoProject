import Page from '../pageobjects/page'

class AddproductPage extends Page {

    get email_val() { return $('[name=email]') }
    get password_val() { return $('[name=passwd]') }
    get dressmenu_val() { return $('=Dresses') }
    get dressheader_val() { return $('span.category-name') }
    get header_message() { return $('//*[@id="layer_cart"]/div[1]/div[1]/h2') }
    get submitbutton_val() { return $('//*[@class="btn btn-default button button-medium"]')}

}

export default new AddproductPage