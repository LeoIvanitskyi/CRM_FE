
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/loginPage';
import MainPage from '../pageobjects/mainCrmPage';

defineSupportCode(function({ When }) {
  // *** belongs to loging  feature
  When(/^I login with username and password "([^"]*)" "([^"]*)" into the text box$/, function(arg1, arg2) {
    loginPage.login(arg1, arg2);    // entering user name, password and and submiting the page
  });

  // *** belongs to logout  feature
  When(/^I press logout button$/, function () {
      MainPage.logout();
  });
});
