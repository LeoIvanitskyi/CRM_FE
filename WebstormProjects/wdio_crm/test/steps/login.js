import { defineSupportCode } from 'cucumber';
import loginPage from "../../pageObjects/page/loginPage";


defineSupportCode(function({ Given }) {

    Given(/^I am open login page and login as admin$/, function() {
        loginPage.open();
        /*loginPage.usernameInput.input('CRMAdmin@betlab');
        loginPage.passwordInput.input('CrmAdmin123#');*/
        /*loginPage.submitButtton.click();*/
    });
});

defineSupportCode(function ({ When }) {
    When(/^I enter login and password $/, function() {
        loginPage.usernameInput.input('CRMAdmin@betlab');
        loginPage.passwordInput.input('CrmAdmin123#');
    });
});

defineSupportCode(function({ Then }) {
    // *** belongs to Yahoo serch feature
    Then(/^I click enter button$/, function() {
        loginPage.submitButtton.click();
    });
});
