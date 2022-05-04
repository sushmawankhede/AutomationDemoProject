Feature: The Automation Practice Website

    Scenario Outline: As a user , I want to  login to  this Website , search product , add ptoduct to cart and validate details on payment page
        Given i log in to the website <url> with username <email> and password <pwd>
        When i search the dress <product> and click on add to cart
        Then i validate the message <message> displayed on the page
        When i click on proceed to checkout button
        Then i validate the product details <Product Description>,<Avail> and <Price>

        Examples:

            | url                                     | email                     | pwd           | dheader | product               | message                                          | Product Description   | Avail    | Price  |
            | http://automationpractice.com/index.php | testuser1.04.22@gmail.com | TestUser@1234 | Dresses | Printed Chiffon Dress | Product successfully added to your shopping cart | Printed Chiffon Dress | In stock | $16.40 |
