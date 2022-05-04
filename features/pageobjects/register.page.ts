import Page from '../pageobjects/page'

class RegisterPage extends Page
  {
       get signin_val() { return $('.login')}
       get emailaddress_input() { return $('//*[@class="box"]/h3')}
       get submitbutton() { return $('[id=SubmitCreate]')}
       get pageheading() { return $('h1.page-heading')}
       get fname_input() { return $('[name=customer_firstname]')}
       get lname_input() { return $('[name=customer_lastname]')}

  }

  export default new RegisterPage