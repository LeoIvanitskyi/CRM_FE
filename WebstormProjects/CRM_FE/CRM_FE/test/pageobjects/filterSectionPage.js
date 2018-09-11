import Page from './page'

class FilterSection extends Page {

    /**
     * define elements
     */
    //Common buttons:
    get closeButtonX()   { return browser.element('#filter-params-modal-close-button-x > span'); }
    get applyFilterButton()   { return browser.element('#filter-params-modal-apply-button'); }
    get closeButton()   { return browser.element('#filter-params-modal-close-button'); }
    //GENERAL SPORT filters tab:
    get filterGeneralTab()   { return browser.element('#ngb-tab-0'); }
    //Load button
    get generalLoadAccounts() {browser.element('div.form-group.accounts > div > div > button')}
        //Input type fields:
        get generalInputAccounts()   { return browser.element('#general-data-filter-accounts'); }
        get generalCity()   { return browser.element('#general-data-filter-city'); }
        get generalMaxValueFrom()   { return browser.element('#general-data-filter-max-value-from'); }
        get generalMaxValueTo()   { return browser.element('#ngb-tab-21-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.player-max-value > div > input:nth-child(5)'); }
        get generalMaxValueCheck() { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.player-max-value > div > input.ml-1.ng-pristine.ng-valid.ng-touched'); }
        get generalMaxValueUncheck()  { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.player-max-value > div > input.ml-1.ng-valid.ng-touched.ng-dirty'); }
        get generalAgeFrom()   { return browser.element('#general-data-filter-age-from'); }
        get generalAgeTo()   { return browser.element('#ngb-tab-21-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.age > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
        get generalBalanceFrom()   { return browser.element('#general-data-filter-rest-of-sum-from'); }
        get generalBalanceTo()   { return browser.element('#ngb-tab-21-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.rest-of-sum > div > input:nth-child(5)'); }
        get generalDepositsFrom()   { return browser.element('#general-data-filter-deposited-from'); }
        get generalDepositsTo()   { return browser.element('#ngb-tab-21-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.deposited > div > input:nth-child(5)'); }
        get generalWithdrawnFrom()   { return browser.element('#general-data-filter-deposited-from'); }
        get generalWithdrawnTo()   { return browser.element('#ngb-tab-21-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.withdrawn > div > input:nth-child(5)'); }
        get generalProfitSportFrom() { return browser.element('#general-data-filter-sport-profit-from'); }
        get generalProfitSportTo () { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.sport-profit > div > input:nth-child(5)'); }
        //Input type datepicker:
        get generalDateOfRegFrom()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.reg-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
        get generalDateOfRegTo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.reg-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
        get generalDateOfLastBetSportFrom()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.sport-last-bet-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
        get generalDateOfLastBetSportTo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.sport-last-bet-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
        get generalDateOfLastLoginSportFrom()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.sport-last-login-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
        get generalDateOflastLoginSportTo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(2) > div.form-group.sport-last-login-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
        get generalDateOflastDepositSportFrom()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.last-deposit-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
        get generalDateofLastDepositSportTo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.last-deposit-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
        //Input type dropdown:
        get generalCountries()   { return browser.element('#general-data-filter-countries > div > button'); }
            get generalCountriesUkraine()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(1) > a > span'); }
            get generalCountriesRussia()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(2) > a > span'); }
            get generalCountriesGeorgia()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(4) > a > span'); }
            get generalCountriesMoldova()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(5) > a > span'); }
            get generalCountriesKazakhstan()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(3) > a > span'); }
            get generalCountriesBelarus()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(6) > a > span'); }
            get generalCountriesPoland()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(7) > a > span'); }
            get generalCountriesTanzania()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(8) > a > span'); }
            get generalCountriesTajikistan()   { return browser.element('#general-data-filter-countries > div > ul > li:nth-child(9) > a > span'); }
        get generalCurrencys()   { return browser.element('#general-data-filter-currencies > div > button'); }
            get generalCurrencysUah()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(1) > a > span'); }
            get generalCurrencysRub()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(2) > a > span'); }
            get generalCurrencysUsd()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(3) > a > span'); }
            get generalCurrencysEur()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(4) > a > span'); }
            get generalCurrencysKzt()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(5) > a > span'); }
            get generalCurrencysGel()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(6) > a > span'); }
            get generalCurrencysMdl()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(7) > a > span'); }
            get generalCurrencysPln()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(8) > a > span'); }
            get generalCurrencysTzs()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(9) > a > span'); }
            get generalCurrencysByn()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(10) > a > span'); }
            get generalCurrencysAzn()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(11) > a > span'); }
            get generalCurrencysTjs()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(12) > a > span'); }
            get generalCurrencysTmt()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(13) > a > span'); }
            get generalCurrencysAmd()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(14) > a > span'); }
            get generalCurrencysKgs()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(15) > a > span'); }
            get generalCurrencysAzn()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(16) > a > span'); }
            get generalCurrencysByn()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(17) > a > span'); }
            get generalCurrencysGel()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(18) > a > span'); }
            get generalCurrencysKztKassa()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(19) > a > span'); }
            get generalCurrencysRubCupis()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(20) > a > span'); }
            get generalCurrencysUE()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(21) > a > span'); }
            get generalCurrencysUahMsl()   { return browser.element('#general-data-filter-currencies > div > ul > li:nth-child(22) > a > span'); }
        get generalStatuses()   { return browser.element(''); }
            get generalStatusEmpty()   { return browser.element('#general-data-filter-player-status'); }
            get generalStatus0()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(1)'); }
            get generalStatus1()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(2)'); }
            get generalStatus2()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(3)'); }
            get generalStatus3()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(4)'); }
            get generalStatus4()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(5)'); }
            get generalStatus5()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(6)'); }
            get generalStatus10()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(7)'); }
            get generalStatus11()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(8)'); }
            get generalStatus17()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(9)'); }
            get generalStatus20()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(10)'); }
            get generalStatus30()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(11)'); }
            get generalStatus31()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(12)'); }
            get generalStatus32()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(13)'); }
            get generalStatus35()   { return browser.element('#general-data-filter-player-status > div > ul > li:nth-child(14)'); }
        //Input type lable:
        get generalIsBlocked()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked'); }
            get generalIsBlockedUndef()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(1)'); }
            get generalIsBlockedYes()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(2)'); }
            get generalIsBlockedNo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(3)'); }
        get generalOWCard()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard'); }
            get generalOWCardUndef()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(1)'); }
            get generalOWCardYes()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(2)'); }
            get generalOWCardNo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(3)'); }
        get generalIsEmailConfirmed()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed'); }
            get generalIsEmailConfirmedUndef()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(1)'); }
            get generalIsEmailConfirmedYes()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(2)'); }
            get generalIsEmailConfirmedNo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(3)'); }
        get generalBonusProgramm()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus'); }
            get generalBonusProgrammUndef()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(1)'); }
            get generalBonusProgrammReg1()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(2)'); }
            get generalBonusProgrammReg2()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(3)'); }
            get generalBonusProgrammReg3()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(4)'); }
        get generalFirstDeposit()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit'); }
            get generalFirstDepositUndef()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(1)'); }
            get generalFirstDepositYes()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(2)'); }
            get generalFirstDepositNo()   { return browser.element('#ngb-tab-0-panel > general-sports-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(3)'); }
        //GENERAL CASINO/BETGAMES filters tab:
        get filterGeneralCasinoBetGames()   { return browser.element('#ngb-tab-1'); }
        //Load button
        get generalLoadAccounts() {browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.accounts > div > div > button')}
            //Input type fields:
            get generalInputAccounts()   { return browser.element('#general-casino-betgames-filter-accounts'); }
            get generalCity()   { return browser.element('#general-casino-betgames-filter-city'); }
            get generalMaxValueFrom()   { return browser.element('#general-casino-betgames-filter-max-value-from'); }
            get generalMaxValueTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.player-max-value > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get generalAgeFrom()   { return browser.element('#general-casino-betgames-filter-age-from'); }
            get generalAgeTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.age > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get generalBalanceFrom()   { return browser.element('#general-casino-betgames-filter-rest-of-sum-from'); }
            get generalBalanceTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.rest-of-sum > div > input:nth-child(5)'); }
            get generalDepositsFrom()   { return browser.element('#general-casino-betgames-filter-deposited-from'); }
            get generalDepositsTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.deposited > div > input:nth-child(5)'); }
            get generalWithdrawnFrom()   { return browser.element('#general-casino-betgames-filter-withdrawn-from'); }
            get generalWithdrawnTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.withdrawn > div > input:nth-child(5)'); }
            get generalProfitBetGamesFrom() { return browser.element('#general-casino-betgames-filter-betgames-profit-from'); }
            get generalProfitBetGamesTo () { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.betgames-profit > div > input:nth-child(5)'); }
            get generalProfitCasinoFrom () { return browser.element('#general-casino-betgames-filter-casino-profit-from'); }
            get generalProfitCasinoTo () { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.casino > div > input:nth-child(5)'); }
            //Input type datepicker:
            get generalDateOfRegFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.reg-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateOfRegTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.reg-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get generalDateOfLastBetCasinoFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.casino-last-bet-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateOfLastBetCasinoTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.casino-last-bet-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get generalDateOfLastBetBetGamesFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.betgames-last-bet-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateOfLastBetBetGamesTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.betgames-last-bet-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get generalDateOfLastLoginCasinoFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.casino-last-login-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateOflastLoginCasinoTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.casino-last-login-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get generalDateOfLastLoginBetGamesFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.betgames-last-login-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateOflastLoginBetGamesTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(2) > div.form-group.betgames-last-login-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get generalDateOflastDepositFrom()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.last-deposit-date > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get generalDateofLastDepositTo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.last-deposit-date > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            //Input type dropdown:
            get generalCountries()   { return browser.element('#general-casino-betgames-filter-countries > div > button'); }
                get generalCountriesUkraine()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(1) > a'); }
                get generalCountriesRussia()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(2) > a > span'); }
                get generalCountriesGeorgia()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(4) > a > span'); }
                get generalCountriesMoldova()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(5) > a > span'); }
                get generalCountriesKazakhstan()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(3) > a > span'); }
                get generalCountriesBelarus()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(6) > a > span'); }
                get generalCountriesPoland()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(7) > a > span'); }
                get generalCountriesTanzania()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(8) > a > span'); }
                get generalCountriesTajikistan()   { return browser.element('#general-casino-betgames-filter-countries > div > ul > li:nth-child(9) > a > span'); }
            get generalCurrencys()   { return browser.element('#general-casino-betgames-filter-currencies > div > button'); }
                get generalCurrencysUah()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(1) > a > span'); }
                get generalCurrencysRub()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(2) > a > span'); }
                get generalCurrencysUsd()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(3) > a > span'); }
                get generalCurrencysEur()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(4) > a > span'); }
                get generalCurrencysKzt()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(5) > a > span'); }
                get generalCurrencysGel()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(6) > a > span'); }
                get generalCurrencysMdl()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(7) > a > span'); }
                get generalCurrencysPln()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(8) > a > span'); }
                get generalCurrencysTzs()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(9) > a > span'); }
                get generalCurrencysByn()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(10) > a > span'); }
                get generalCurrencysAzn()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(11) > a > span'); }
                get generalCurrencysTjs()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(12) > a > span'); }
                get generalCurrencysTmt()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(13) > a > span'); }
                get generalCurrencysAmd()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(14) > a > span'); }
                get generalCurrencysKgs()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(15) > a > span'); }
                get generalCurrencysAzn()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(16) > a > span'); }
                get generalCurrencysByn()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(17) > a > span'); }
                get generalCurrencysGel()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(18) > a > span'); }
                get generalCurrencysKztKassa()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(19) > a > span'); }
                get generalCurrencysRubCupis()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(20) > a > span'); }
                get generalCurrencysUE()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(21) > a > span'); }
                get generalCurrencysUahMsl()   { return browser.element('#general-casino-betgames-filter-currencies > div > ul > li:nth-child(22) > a > span'); }
            get generalStatuses()   { return browser.element('#general-casino-betgames-filter-player-status > div > button'); }
                get generalStatusEmpty()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(1) > a > span'); }
                get generalStatus0()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(2) > a > span'); }
                get generalStatus1()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(3) > a > span'); }
                get generalStatus2()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(4) > a > span'); }
                get generalStatus3()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(5) > a > span'); }
                get generalStatus4()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(6) > a > span'); }
                get generalStatus5()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(7) > a > span'); }
                get generalStatus10()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(8) > a > span'); }
                get generalStatus11()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(9) > a > span'); }
                get generalStatus17()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(10) > a > span'); }
                get generalStatus20()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(11) > a > span'); }
                get generalStatus30()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(12) > a > span'); }
                get generalStatus31()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(13) > a > span'); }
                get generalStatus32()   { return browser.element('#general-casino-betgames-filter-player-status > div > ul > li:nth-child(14) > a > span'); }
            //Input type lable:
            get generalIsBlocked()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked'); }
                get generalIsBlockedUndef()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(1)'); }
                get generalIsBlockedYes()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(2)'); }
                get generalIsBlockedNo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(1) > div.form-group.is-account-blocked > tristate > div > label:nth-child(3)'); }
            get generalOWCard()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard'); }
                get generalOWCardUndef()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(1)'); }
                get generalOWCardYes()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(2)'); }
                get generalOWCardNo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.owcard > tristate > div > label:nth-child(3)'); }
            get generalIsEmailConfirmed()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed'); }
                get generalIsEmailConfirmedUndef()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(1)'); }
                get generalIsEmailConfirmedYes()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(2)'); }
                get generalIsEmailConfirmedNo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.is-email-confirmed > tristate > div > label:nth-child(3)'); }
            get generalBonusProgramm()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus'); }
                get generalBonusProgrammUndef()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(1)'); }
                get generalBonusProgrammReg1()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(2)'); }
                get generalBonusProgrammReg2()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(3)'); }
                get generalBonusProgrammReg3()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.nn-bonus > div > label:nth-child(4)'); }
            get generalFirstDeposit()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit'); }
                get generalFirstDepositUndef()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(1)'); }
                get generalFirstDepositYes()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(2)'); }
                get generalFirstDepositNo()   { return browser.element('#ngb-tab-1-panel > general-casino-betgames-filter > form > fieldset > div > div:nth-child(3) > div.form-group.has-first-deposit > tristate > div > label:nth-child(3)'); }
        //SPORTSBOOK filters tab:
        get filterSportsbook()   { return browser.element('#ngb-tab-2'); }
        //Div_All_bets
            get sportsbookAllSports()   { return browser.element('#ngb-panel-all-sports-1-header > a'); }
            //Количество всех ставок
            get sportsbookAllSportsAmountFrom()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookAllSportsAmountTo()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookAllSportsAmountPercents()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookAllSportsAmountPcs()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookAllSportsSunFrom()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookAllSportsSumTo()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookAllSportsSumPercents()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookAllSportsSumUsd()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookAllSportsProfitFrom()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookAllSportsProfitTo()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookAllSportsProfitPercents()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookAllSportsProfitUsd()   { return browser.element('#ngb-panel-all-sports-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Football
            get sportsbookFootball()   { return browser.element('#ngb-panel-football-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookFootballAmountFrom()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookFootballAmountTo()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookFootballAmountPersents()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookFootballAmountPcs()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookFootballSumFrom()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookFootballSumTo()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookFootballSumPercents()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookFootballSumUsd()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookFootballProfitFrom()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookFootballProfitTo()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookFottblalProfitPerents()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookFootballProfitUsd()   { return browser.element('#ngb-panel-football-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Tennis
            get sportsbookTennis()   { return browser.element('#ngb-panel-tennis-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookTennisAmmountFrom()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookTennisAmmountTo()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookTennisAmmountPercents()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookTennisAmountPcs()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookTennisSumFrom()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookTennisSumTo()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookTennisPercents()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookTennisUsd()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookTennisProfitFrom()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookTennisProfitTo()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookTennisProfitPrecents()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookTennusProfitUsd()   { return browser.element('#ngb-panel-tennis-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Basketball
            get sportsbookBasketball()   { return browser.element('#ngb-panel-basketball-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookBasketballAmmountFrom()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookBasketballAmmountTo()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookBasketballAmmountPercents()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookBasketballAmmountPcs()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookBasketballSumFrom()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookBasketballSumTo()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookBasketballSumPercents()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookBasketballSumUsd()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookBasketballProfitFrom()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            get sportsbookBasketballProfitTo()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            get sportsbookBasketballProfitPercents()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookBasketballProfitUsd()   { return browser.element('#ngb-panel-basketball-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Hockey
            get sportsbookHockey()   { return browser.element('#ngb-panel-hockey-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookHockeyAmmountFrom()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookHockeyAmmountTo()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookHockeyAmmountPercents()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookHockeyAmmountPcs()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookHockeySumFrom()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookHockeySumTo()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookHockeySumPercents()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookHockeySumUsd()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookHockeyProfitFrom()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookHockeyProfitTo()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookHockeyProfitPercents()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookHockeyProfitUsd()   { return browser.element('#ngb-panel-hockey-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_VirtualSport
            get sportsbookVirtualSport()   { return browser.element('#ngb-panel-virtualSport-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookVirtualSportAmmountFrom()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookVirtualSportAmmountTo()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookVirtualSportAmmountPercents()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookVirtualSportAmmountPcs()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookVirtualSportSumFrom()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookVirtualSportSumTo()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookVirtualSportSumPercents()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookVirtualSportSumUsd()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookVirtualSportProfitFrom()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookVirtualSportProfitTo()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookVirtualSportProfitPercents()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookVirtualSportProfitUsd()   { return browser.element('#ngb-panel-virtualSport-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Others
            get sportsbookOthers()   { return browser.element('#ngb-panel-others-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookOthersAmmountFrom()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookOthersAmmountTo()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOthersAmmountPercents()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookOthersAmmountPcs()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookOthersSumFrom()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookOthersSumTo()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(2) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookOthersSumPercents()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookOthersSumUsd()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookOthersProfitFrom()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookOthersProfitTo()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOthersProfitPercents()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOthersProfitusd()   { return browser.element('#ngb-panel-others-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Ordinar
            get sportsbookOrdinar()   { return browser.element('#ngb-panel-ordinar-1-header'); }
            //Количество всех ставок
            get sportsbookOrdinarAmmountFrom()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookOrdinarAmmountTo()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOrdinarAmmountPercent()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookOrdinarAmmountPcs()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookOrdinarSumFrom()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookOrdinarSumTo()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOrdinarSumpercents()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookOrdinarSumUsd()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookOrdinarProfitFrom()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookOrdinarProfitTo()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOrdinarProfitPercents()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookOrdinarProfitUsd()   { return browser.element('#ngb-panel-ordinar-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_Express
            get sportsbookExpress()   { return browser.element('#ngb-panel-express-1-header'); }
            //Количество всех ставок
            get sportsbookExpressAmmountFrom()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookExpressAmmountTo()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookExpressAmmountPercent()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookExpressAmmountPcs()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookExpressSumFrom()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookExpressSumTo()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookExpressSumpercents()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookExpressSumUsd()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookExpressProfitFrom()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookExpressProfitTo()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookExpressProfitPercents()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookExpressProfitUsd()   { return browser.element('#ngb-panel-express-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Div_System
            get sportsbookSystem()   { return browser.element('#ngb-panel-system-1-header > a > span'); }
            //Количество всех ставок
            get sportsbookSystemAmmountFrom()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get sportsbookSystemAmmountTo()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get sportsbookSystemAmmountPercent()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookSystemAmmountPcs()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get sportsbookSystemSumFrom()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookSystemSumTo()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookSystemSumpercents()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookSystemSumUsd()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get sportsbookSystemProfitFrom()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get sportsbookSystemProfitTo()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get sportsbookSystemProfitPercents()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get sportsbookSystemProfitUsd()   { return browser.element('#ngb-panel-system-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
        //Line_Type
            get lineType()   { return browser.element('#ngb-panel-sportsbook-bylinetype-panel-header > a > span'); }
            get lineTypeLiveFrom()   { return browser.element('#ngb-panel-sportsbook-bylinetype-panel > div > div:nth-child(1) > div > div > input:nth-child(2)'); }
            get lineTypeLiveTo()   { return browser.element('#ngb-panel-sportsbook-bylinetype-panel > div > div:nth-child(1) > div > div > input:nth-child(5)'); }
            get lineTypePrematchFrom()   { return browser.element('#ngb-panel-sportsbook-bylinetype-panel > div > div:nth-child(2) > div > div > input:nth-child(2)'); }
            get lineTypePrematchTo()   { return browser.element('#ngb-panel-sportsbook-bylinetype-panel > div > div:nth-child(2) > div > div > input:nth-child(5)'); }

        //Channels filters tab
          get filterChannelsTab()   { return browser.element('#ngb-tab-3'); }
            //Div_classic.parimatch.com
            get channelsClassic()   { return browser.element('#ngb-panel-parimatch-1-header > a > span'); }
            //Количество всех ставок
            get channelsClassicAmmountFrom()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsClassicAmmountTo()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsClassicAmmountPercent()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsClassicAmmountPcs()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get channelsClassicSumFrom()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsClassicSumTo()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsClassicSumPercents()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsClassicSumUsd()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get channelsClassicProfitFrom()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsClassicProfitTo()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsClassicProfitPercents()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsClassicProfitUsd()   { return browser.element('#ngb-panel-parimatch-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Div_air.parimatch.com
            get channelsAir()   { return browser.element('#ngb-panel-air-1-header > a > span'); }
            //Количество всех ставок
            get channelsAirAmmountFrom()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAirAmmountTo()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAirAmmountPercent()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAirAmmountPcs()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get channelsAirSumFrom()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAirSumTo()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAirSumPercents()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAirSumUsd()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get channelsAirProfitFrom()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAirProfitTo()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAirProfitPercents()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAirProfitUsd()   { return browser.element('#ngb-panel-air-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Div_m.parimatch.com
            get channelsM()   { return browser.element('#ngb-panel-mobileWeb-1-header > a > span'); }
            //Количество всех ставок
            get channelsMAmmountFrom()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsMAmmountTo()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsMAmmountPercent()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsMAmmountPcs()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Объем всех ставок
            get channelsMSumFrom()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsMSumTo()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsMPercents()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsMSumUsd()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Доход
            get channelsMProfitFrom()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsMProfitTo()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsMProfitPercents()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsMProfitUsd()   { return browser.element('#ngb-panel-mobileWeb-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
            //Div_Приложение Android
            get channelsAndroid()   { return browser.element('#ngb-panel-mobileAndroid-1-header > a > span'); }
            //Количество всех ставок
            get channelsAndroidAmmountFrom()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAndroidAmmountTo()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAndroidAmmountPercent()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAndroidAmmountPcs()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get channelsAndroidSumFrom()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAndroidSumTo()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAndroidSumPercents()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAndroidSumUsd()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get channelsAndroidProfitFrom()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsAndroidProfitTo()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsAndroidProfitPercents()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsAndroidProfitUsd()   { return browser.element('#ngb-panel-mobileAndroid-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
     //Div_Приложение iOS
            get channelsIOS()   { return browser.element('#ngb-panel-mobileIos-1-header > a > span'); }
    //Количество всех ставок
            get channelsIOSAmmountFrom()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsIOSAmmountTo()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsIOSAmmountPercent()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsIOSAmmountPcs()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get channelsIOSSumFrom()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsIOSSumTo()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsIOSSumPercents()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsIOSSumUsd()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get channelsIOSProfitFrom()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsIOSProfitTo()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsIOSProfitPercents()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsIOSProfitUsd()   { return browser.element('#ngb-panel-mobileIos-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Div_Терминал
            get channelsTerminal()   { return browser.element('#ngb-panel-terminal-1-header > a > span'); }
    //Количество всех ставок
            get channelsTerminalAmmountFrom()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsTerminalAmmountTo()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsTerminalAmmountPercent()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsTerminalAmmountPcs()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get channelsTerminalSumFrom()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsTerminalSumTo()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsTerminalSumPercents()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsTerminalSumUsd()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get channelsTerminalProfitFrom()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get channelsTerminalProfitTo()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get channelsTerminalProfitPercents()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get channelsTerminalProfitUsd()   { return browser.element('#ngb-panel-terminal-1 > div > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Channels filters tab
          get filterOtherGamesTab()   { return browser.element('#ngb-tab-4'); }
    //Div_Betgames
            get otherGamesBetgames()   { return browser.element('#ngb-panel-betGames-1-header > a > span'); }
    //Количество всех ставок
            get otherGamesBetgamesAmmountFrom()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-pristine.ng-valid.ng-touched'); }
            get otherGamesBetgamesAmmountTo()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input.form-control.ng-untouched.ng-pristine.ng-valid'); }
            get otherGamesBetgamesAmmountPercent()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesBetgamesAmmountPcs()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get otherGamesBetgamesSumFrom()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesBetgamesSumTo()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesBetgamesSumPercents()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesBetgamesSumUsd()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get otherGamesBetgamesProfitFrom()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesBetgamesProfitTo()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesBetgamesProfitPercents()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesBetgamesProfitUsd()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Дата последней ставки
            get otherGamesBetgamesDateOfLastBetFrom()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get otherGamesBetgamesDateOfLastBetTo()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get otherGamesBetgamesDateLock()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(1)'); }
            get otherGamesBetgamesDateUnlock()   { return browser.element('#ngb-panel-betGames-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(2)'); }
    //Div_Казино
            get otherGamesCasino()   { return browser.element('#ngb-panel-casino-1-header > a > span'); }
    //Количество всех ставок
            get otherGamesCasinoAmmountFrom()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesCasinoAmmountTo()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesCasinoAmmountPercent()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesCasinoAmmountPcs()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get otherGamesCasinoSumFrom()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get otherGamesCasinoSumTo()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesCasinoSumPercents()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesCasinoSumUsd()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get otherGamesCasinoProfitFrom()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesCasinoProfitTo()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesCasinoProfitPercents()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesCasinoProfitUsd()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Дата последней ставки
            get otherGamesCasinoDateOfLastBetFrom()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get otherGamesCasinoDateOfLastBetTo()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get otherGamesCasinoDateLock()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(1)'); }
            get otherGamesCasinoDateUnlock()   { return browser.element('#ngb-panel-casino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(1)'); }
    //Div_Tain казино
            get otherGamesTainCasino()   { return browser.element('#ngb-panel-tainCasino-1-header > a > span'); }
            //Количество всех ставок
            get otherGamesTainCasinoAmmountFrom()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesTainCasinoAmmountTo()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesTainCasinoAmmountPercent()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesTainCasinoAmmountPcs()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get otherGamesTainCasinoSumFrom()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesTainCasinoSumTo()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesTainCasinoSumPercents()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesTainCasinoSumUsd()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get otherGamesTainCasinoProfitFrom()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesTainCasinoProfitTo()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesTainCasinoProfitPercents()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesTainCasinoProfitUsd()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Дата последней ставки
            get otherGamesTainCasinoDateOfLastBetFrom()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get otherGamesTainCasinoDateOfLastBetTo()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get otherGamesTainCasinoDateLock()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(1)'); }
            get otherGamesTainCasinoDateUnlock()   { return browser.element('#ngb-panel-tainCasino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(2)'); }
    //Исключения
            get otherGamesTainCasinoExcludeBlocked()   { return browser.element(''); }
            get otherGamesTainCasinoExcludeLimitedGamers()   { return browser.element(''); }
    //Div_Red казино
            get otherGamesRedCasino()   { return browser.element('#ngb-panel-redCasino-1-header > a > span'); }
    //Количество всех ставок
            get otherGamesRedCasinoAmmountFrom()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesRedCasinoAmmountTo()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesRedCasinoAmmountPercent()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesRedCasinoAmmountPcs()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(1) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Объем всех ставок
            get otherGamesRedCasinoSumFrom()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesRedCasinoSumTo()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesRedCasinoPercents()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesRedCasinoSumUsd()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(2) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Доход
            get otherGamesRedCasinoProfitFrom()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(2)'); }
            get otherGamesRedCasinoProfitTo()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > div > input:nth-child(5)'); }
            get otherGamesRedCasinoProfitPercents()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label:nth-child(1)'); }
            get otherGamesRedCasinoProfitUsd()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(1) > div:nth-child(3) > numeric-range > div > label > div > label.btn.btn-secondary.active'); }
    //Дата последней ставки
            get otherGamesRedCasinoDateOfLastBetFrom()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(2) > input'); }
            get otherGamesRedCasinoDateOfLastBetTo()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(2) > div > date-range-input-group > div > datepicker:nth-child(5) > input'); }
            get otherGamesRedCasinoDateLock()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(1)'); }
            get otherGamesRedCasinoDateOpen()   { return browser.element('#ngb-panel-redCasino-1 > div:nth-child(2) > div > date-range-input-group > div > div > i:nth-child(2)'); }
    /**
     * define or overwrite page methods
     */
    open () {
        super.open('http://dbe-crm.hp.consul/players')       //this will append `players` to the baseUrl to form complete URL
        browser.pause(1000);
    }
    /**
     * your page specific methods
     */

}

export default new FilterSection()
