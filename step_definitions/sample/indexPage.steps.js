'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
let IndexPage = require('./../../pageobjects/IndexPage');


module.exports = function() {
    let indexPageObject = new IndexPage();


    this.Then(/^I see that index page has title: "([^"]*)"$/, (title) =>
        expect(browser.getTitle()).to.eventually.equal(title));

    this.When(/^I click 'Add new Computer' button$/, () =>
        indexPageObject.clickButton(indexPageObject.addNewComputerButton));

    this.Then(/^I see that index page is opened$/, () =>
        expect(browser.getCurrentUrl()).to.eventually.equal('http://computer-database.herokuapp.com/computers'));

    this.Then(/^I see that 'Filter' input is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.filterInputField)).to.eventually.be.true);

    this.Then(/^I see that 'Filter' submit button is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.filterSubmitButton)).to.eventually.be.true);

    this.Then(/^I see that 'Add new computer' button is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.addNewComputerButton)).to.eventually.be.true);

    this.Then(/^I see that page has table with "([^"]*)" columns$/, (numberOfColumns) =>
        expect(indexPageObject.getTableColumns()).to.eventually.equal(4));

    this.Then(/^I see that 'Pagination' block is visible$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.pagination)).to.eventually.be.true);

    this.Then(/^I find computer by name: "([^"]*)"$/, (name) =>
        indexPageObject.findComputer(name));

    this.Then(/^I see that Message warning is displayed$/, () =>
        expect(indexPageObject.isElementVisible(indexPageObject.messageWarning)).to.eventually.be.true);

    this.Then(/^I see that Message warning is not displayed$/, () =>
        expect(indexPageObject.isElementExist(indexPageObject.messageWarning)).to.eventually.be.false);

    this.Then(/^I see that finded data is shown :  "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function(name, introducedDate, discontinuedDate, company) {

        expect(indexPageObject.isComputerEquals(name, introducedDate, discontinuedDate, company)).to.eventually.be.true;
    });
    this.Then(/^I delete computer with name: "([^"]*)"$/, function(name) {
        expect(indexPageObject.deleteComputer())
    })


};