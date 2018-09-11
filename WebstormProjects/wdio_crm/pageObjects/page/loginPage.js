import Page from './page'

class LoginPage extends Page {

    /**
     * define elements
     */

    get usernameInput()   { return browser.element('#loginInput'); }
    get passwordInput()   { return browser.element('#passwordInput'); }
    get submitButtton ()     { return browser.element('body > my-app > ng-component > div > form > button'); }


    /**
     * define or overwrite page methods
    open () {
        super.open('http://www.phptravels.net/login')       //this will append `login` to the baseUrl to form complete URL
        browser.pause(1000);
    }
    /!**
     * your page specific methods
     *!/

    waitForloginPageToLoad () {
        if(!this.footerImage.isVisible()){
            this.footerImage.waitForVisible(5000);
        }
    }

    login (username, password) {
        this.waitForloginPageToLoad();
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.submitButtton.click();
        browser.pause(2000);
    }*/
}

export default new LoginPage()