
import { defineSupportCode } from 'cucumber';
import MainPage from '../pageobjects/mainCrmPage';
import loginPage from "../pageobjects/loginPage";

defineSupportCode(function({ Then }) {
  // *** belongs to ta-loging  feature
  Then(/^I should see user name "([^"]*)" on main page$/, function(message) {
      MainPage.getUserName().should.equal(message);
  });

  // *** belongs to logout  feature
   Then(/^I should see all elements of login page$/, function () {
       loginPage.usernameInput.isVisible();
       loginPage.passwordInput.isVisible();
       loginPage.loginButton.isVisible();
       loginPage.footerImage.$1('Авторизация');
   })

});
