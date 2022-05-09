Feature: The Automation Practice Website

    Scenario Outline: As a user , I want to  load  this Website and navigate to create account page
        Given I open the browser and load the url <homepageurl>
        Then I should see a header with text <headertext>
        Then i should see sign in <signin> link displayed on page
        When i click on sign in link
        Then i should see a header with text <account> displayed on current page
        When i enter valid email address <emailaddress> in the textbox
        And i click on Create an account button
        Then i should successfully navigate to create account page , should see heading <heading>


        Examples:


            | homepageurl                              | headertext                  | signin                                                        | emailaddress | heading        | account           |
            | http://automationpractice.com/index.php/ | Automation Practice Website | http://automationpractice.com/index.php?controller=my-account | @gmail.com   | AUTHENTICATION | CREATE AN ACCOUNT |





