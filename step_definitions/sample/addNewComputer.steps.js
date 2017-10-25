'use strict';

let AddNewComputerPage = require('./../../pageobjects/AddNewComputerPage');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function() {
    let addNewComputerPageObject = new AddNewComputerPage();

    this.Then(/^I see that AddNewComputer page has title: "([^"]*)"$/, (title) =>
        expect(browser.getTitle()).to.eventually.equal(title));

    this.Then(/^I see that AddNewComputer page is opened$/, () =>

        expect(addNewComputerPageObject.getPageHeader()).to.eventually.equal('Add a computer'));

    this.Then(/^I see that App has header: "([^"]*)"$/, (appHeader) =>
        expect(addNewComputerPageObject.getAppHeader()).to.eventually.equal(appHeader));

    this.Then(/^I see that 'Computer name' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Computer name' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.computerNameInputField)).to.eventually.be.true);

    this.Then(/^I see that 'Introduced date' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Introduced date' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.introducedDateInputFieldLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Discontinued date' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputField)).to.eventually.be.true);

    this.Then(/^I see that label for 'Discontinued date' field is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.discontinuedDateInputFieldLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Company' combo\-box is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companyComboBox)).to.eventually.be.true);

    this.Then(/^I see that label for 'Company' combo\-box is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.companyComboBoxLabel)).to.eventually.be.true);

    this.Then(/^I see that 'Create this computer' button is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.createComputerButton)).to.eventually.be.true);

    this.Then(/^I see that 'Cancel' button is visible$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.cancelButton)).to.eventually.be.true);

    this.When(/^I add new computer with data: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (name, introducedDate, discontinuedDate, company) =>
        addNewComputerPageObject.addComputer(name, introducedDate, discontinuedDate, company));

    this.When(/^Click 'Cancel' button$/, () => addNewComputerPageObject.clickCancelButton());

    this.When(/^I fill all required fields on AddNewComputer page with data: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, (name, introducedDate, discontinuedDate, company) =>
        addNewComputerPageObject.fillRequireFileds(name, introducedDate, discontinuedDate, company));

    this.Then(/^I see that'Empty name' Error notification is shown$/, () =>
        expect(addNewComputerPageObject.isElementVisible(addNewComputerPageObject.emptyComputerNameErrorNotification)).to.eventually.be.true);
}