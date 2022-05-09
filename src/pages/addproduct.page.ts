import Page from './page'

class AddproductPage extends Page {

    get sign_in() { return $('.login') }
    get email_val() { return $('[name=email]') }
    get password_val() { return $('[name=passwd]') }
    get sign_button() { return $('[name=SubmitLogin]') }
    get dressheader_val() { return $('span.category-name') }
    get search_val() { return $('#search_query_top') }
    get submit_search() { return $('[name=submit_search]') }
    get product() { return $('=Printed Chiffon Dress') }
    get addproduct() { return $('#add_to_cart') }
    get header_message() { return $('//*[@id="layer_cart"]/div[1]/div[1]/h2') }
    get submitbutton_val() { return $('//*[@class="btn btn-default button button-medium"]') }

}

export default new AddproductPage