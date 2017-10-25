'use strict';

let BasePage = require('./BasePage');

class AddNewComputerPage extends BasePage {
    constructor() {
        super();
        this.computerNameInputField = element(by.id('name'));
        this.computerNameInputFieldLabel = $("label[for='name']");
        this.introducedDateInputField = element(by.id('introduced'));
        this.introducedDateInputFieldLabel = $("label[for='introduced']");
        this.discontinuedDateInputField = element(by.id('discontinued'));
        this.discontinuedDateInputFieldLabel = $("label[for='discontinued']");
        this.cancelButton = element(by.linkText('Cancel'));
        this.emptyComputerNameErrorNotification = $('fieldset div:nth-child(1)');
        this.companyComboBox = element(by.id('company'));
        this.companyComboBoxLabel = $("label[for='company']");
        this.createComputerButton = $('.btn.primary');
    }

    addComputer(name, introducedDate, discontinuedDate, company) {
        this.fillRequireFileds(name, introducedDate, discontinuedDate, company);
        this.createComputerButton.click();
    }

    fillRequireFileds(name, introducedDate, discontinuedDate, company) {
        this.computerNameInputField.sendKeys(name);
        this.introducedDateInputField.sendKeys(introducedDate);
        this.discontinuedDateInputField.sendKeys(discontinuedDate);
        element(by.cssContainingText('option', company)).click();
    }

    clickCancelButton() {
        this.cancelButton.click();
    }

}
module.exports = AddNewComputerPage;