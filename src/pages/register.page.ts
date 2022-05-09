import Page from './page'

class RegisterPage extends Page {
     get signin_val() { return $('.login') }
     get emailaddress_val() { return $('[name=email_create]') }
     get emailaddress_input() { return $('//*[@class="box"]/h3') }
     get submitbutton() { return $('[id=SubmitCreate]') }
     get pageheading() { return $('h1.page-heading') }
     get fname_input() { return $('[name=customer_firstname]') }
     get lname_input() { return $('[name=customer_lastname]') }
     get password_input() { return $('[name=passwd]') }
     get fname_add_input() { return $('[name=firstname]') }
     get lname_add_input() { return $('[name=lastname]') }
     get address_input() { return $('[name=address1]') }
     get city_input() { return $('[name=city]') }
     get state_input() { return $('#id_state') }
     get zip_input() { return $('[name=postcode]') }
     get country_input() { return $('#id_country') }
     get mobile_input() { return $('input[name*=phone_mobile]')}
     get submit_account_button() { return $('#submitAccount') }
     get fnamelanme_val() { return $('a.account > span') }

}

export default new RegisterPage