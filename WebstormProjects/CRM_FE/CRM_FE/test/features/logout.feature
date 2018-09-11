Feature: Performing a logout

    As a user of crm
    I want to logout

    Background:

        Given  I on crm login page


    Scenario:
        When I press logout button
        Then I should see all elements of login page


