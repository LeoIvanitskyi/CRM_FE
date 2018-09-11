Feature: Performing a login

  I`ll try to login as a CRM admin user

  Background:

    Given I am open login page and login as admin

    Scenario:
      When I enter login and password
      Then I click enter button
