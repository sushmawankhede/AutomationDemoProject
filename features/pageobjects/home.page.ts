import Page from '../pageobjects/page'

class HomePage extends Page
  {
       get header(){ return $('//*[@id="editorial_block_center"]/h1')}
       get signin_val() { return $('.login')}
       get createaccount_header() { return $('//*[@class="box"]/h3')}
       get emailaddress_val() { return $('[name=email_create]')}
       get submitbutton_val() { return $('[id=SubmitCreate]')}
       get pageheading_val() { return $('h1.page-heading')}

  }

  export default new HomePage