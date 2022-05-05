Feature: The Automation Practice Website

    Scenario Outline: As a user, I want to login to this website,register account and validate details on landing page

        Given I open the browser and load the url "http://automationpractice.com/index.php"
        When i click on sign in link
        And i enter valid email address <emailaddress>
        And i click on Create an account button
        Then i successfully land on create account page , see heading "AUTHENTICATION"
        When i select gender title <gendertitle>
        And i enter first name <fname> and last name <lname>
        Then i validate my email id <emailaddress> is autopulated
        And i enter password <password>
        And i navigate to your address section , fill out mandatory details
        And i enter fname <fname> and lname <lname>
        And i enter address details <address>,<city>,<state>,<zip>,<country>
        And i enter valid mobile number <mobilenumber>
        And i click on register button
        Then i validate firstname lastname <fnamelanme> dispalyed on landing page


        Examples:
            | emailaddress              | gendertitle | fname | lname  | address     | city    | state    | zip   | country       | password        | mobilenumber  | fnamelanme  |
            | testuser1.04.26@gmail.com | Mrs.        | neha  | wadkar | park avenue | newyork | New York | 10001 | United States | TsetUser@123456 | +1-9737896555 | neha wadkar |

