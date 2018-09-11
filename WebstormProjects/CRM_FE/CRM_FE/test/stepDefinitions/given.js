
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/loginPage';
import MainPage from '../pageobjects/mainCrmPage';

defineSupportCode(function({ Given, And }) {

  // *** belongs to loging  feature
  Given(/^I on crm login page$/, function() {
    loginPage.open();     // navigating to login page
  });

  // *** belongs to logout  feature
  Given(/^I on crm main page$/, function () {
      MainPage.dashboardSection.isVisible()
  });


});


