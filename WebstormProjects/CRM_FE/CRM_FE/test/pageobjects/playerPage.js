import Page from './page'

class PlayerPage extends Page {

    /**
     * define elements
     */

    get playerDegmentsDropdaow()   { return browser.element('#segmentsDropdown'); }
        get playerDegmentsDropdaowContetnt()   { return browser.element('div[aria-labelledby="segmentsDropdown"]'); }
    get playerNewSection()     { return browser.element('#new-segment-button'); }
    get playerParameters()     { return browser.element('#show-filter-params-button'); }
    get playerSave()     { return browser.element('#save-segment-button'); }
    get playerCopy()     { return browser.element('#copy-segment-button'); }
    get playerExport()     { return browser.element('#export-segment-button'); }
    get playerExportVip()     { return browser.element('#export-segment-button-2'); }
    get playerSectionGeneral()     { return browser.element('#ngb-tab-50'); }
    get playerSectionExtended()     { return browser.element('#ngb-tab-51'); }
    get playerSectionSportType()     { return browser.element('#ngb-tab-52'); }
    get playerSectionBetTypes()     { return browser.element('#ngb-tab-53'); }
    get playerSectionChannels()     { return browser.element('#ngb-tab-54'); }
    get playerSectionBetGamesAndCasino()     { return browser.element('#ngb-tab-55'); }
    get playerContentTable()     { return browser.element('#ngb-tab-56-panel > players-view-main > div > crm-smart-table > div > div > table > tbody > tr > td'); }
    get playerPageNavigation()     { return browser.element(''); }
    get playerDatesFilerDiv()     { return browser.element(''); }
    get playerDateFilterFrom()     { return browser.element('body > my-app > ng-component > div > div > section > ng-component > div > div > div.card-block > div > div.player-page-date-filter > date-range-input-group > div > datepicker:nth-child(2) > input'); }
    get playerDateFilterTo()     { return browser.element('body > my-app > ng-component > div > div > section > ng-component > div > div > div.card-block > div > div.player-page-date-filter > date-range-input-group > div > datepicker:nth-child(5) > input'); }
    get playerDateAbsoluteRelativeSwitcher()     { return browser.element('body > my-app > ng-component > div > div > section > ng-component > div > div > div.card-block > div > div.player-page-date-filter > date-range-input-group > div > div > i:nth-child(1)'); }

    //SAVE Form
    get playerSaveFormHeader()     { return browser.element('#segmentName'); }
    get playerSaveFormName()     { return browser.element('#segmentDescription'); }
    get playerSaveFormDescription()     { return browser.element('#show-filter-params-button'); }
    get playerSaveFormSegmentTypeOption()     { return browser.element('div.modal-body > div:nth-child(3) > div'); }
        get playerSaveFormDinamicType()     { return browser.element('div.modal-body > div:nth-child(3) > div > label:nth-child(1)'); }
        get playerSaveFormStaticType()     { return browser.element('div.modal-body > div:nth-child(3) > div > label:nth-child(2)'); }
    get playerSaveFormAccessOptions()     { return browser.element('div.modal-body > div:nth-child(4) > div'); }
        get playerSaveFormAccessPublic()     { return browser.element('div.modal-body > div:nth-child(4) > div label:nth-child(1)'); }
        get playerSaveFormAccessPrivate()     { return browser.element('div.modal-body > div:nth-child(4) > div label:nth-child(2)'); }
    get playerSaveFormSaveButton()     { return browser.element('#segment-params-modal-save-button'); }
    get playerSaveFormCancelButton()     { return browser.element('#segment-params-modal-close-button'); }
    get playerSaveFormCloseButtonX()     { return browser.element('#segment-params-modal-close-button-x > span'); }




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

export default new PlayerPage()
