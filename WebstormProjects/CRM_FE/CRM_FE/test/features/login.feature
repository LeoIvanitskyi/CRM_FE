Feature: Performing a login

    As a user on the crm login page
    I want to login

    Background:

        Given I on crm login page

    Scenario Outline: Performing login operation
        When I login with username and password <user> <password> into the text box
        Then I should see user name "CRMAdmin@betlab" on main page

        Examples:
        |user| |password|
        |"CRMAdmin@betlab"| |"CrmAdmin123#"|
        
