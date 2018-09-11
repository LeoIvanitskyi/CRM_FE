import Page from './page'

class MainPage extends Page {

    /**
    * define elements
    */
    get dashboardSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(1) > a'); }
    get playersSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(2) > a'); }
    get campaignSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(3) > a'); }
    get campaignNewRegSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(4) > a'); }
    get campaignSupportdSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(5) > a'); }
    get bonusesSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(6) > a'); }
    get notificationSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(7) > a'); }
    get reportSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(8) > a'); }
    get casinoTainSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(9) > a'); }
    get casinoRedSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(10) > a'); }
    get casinoVipSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(11) > a'); }
    get blockCasinoSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(12) > a'); }
    get controlSection () { return browser.element('body > my-app > ng-component > div > div > aside > ul > li:nth-child(13) > a'); }

    get logoutButton () { return browser.element('#logout-button'); }
    get accountName () { return browser.element('body > my-app > ng-component > div > div > aside > div > div'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://dbe-crm.hp.consul/dashboard')
        browser.pause(2000);
    }

    logout () {
        this.logoutButton.click()
    }

    waitForAccountPageToLoad () {
      if(!this.accountName.isVisible()){
        this.accountName.waitForVisible(10000);
      }
    }
    getUserName (){
      return this.accountName.getText();
    }
}

export default new MainPage()
