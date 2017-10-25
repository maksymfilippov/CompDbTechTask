'use strict';
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

let BasePage = require('./BasePage');


class IndexPage extends BasePage {
    constructor() {
        super();

        this.pagination = element(by.id('pagination'));
        this.filterInputField = element(by.id('searchbox'));
        this.filterSubmitButton = element(by.id('searchsubmit'));
        this.tableColumns = element.all(by.tagName('th'));
        this.messageWarning = $('.alert-message.warning');
        this.computerIntroducedDateTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(2)');
        this.computerDiscontinuedDateTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(3)');
        this.computerCompanyNameTable = $('.computers.zebra-striped>tbody>tr>td:nth-child(4)');
        this.addNewComputerButton = element(by.id('add'));
        this.deleteComputerButton = $('.btn.danger');
        this.computerNameTable = $('tbody>tr>td>a');

    }


    findComputer(computerName) {
        this.filterInputField.clear();
        this.filterInputField.sendKeys(computerName);
        this.filterSubmitButton.click();
        return this;
    };

    getTableColumns() {
        return this.tableColumns.count().then(function(count) {
            return count;
        });
    }
    isComputerEquals(computerName) {
        this.findComputer(computerName);

        let computerInfo = [];
        computerNameTable.get(0).getText().then(function(text) {
            computerInfo.push(text);
            return text;
        });
        this.computerIntroducedDateTable.getText().then(function(text) {
            computerInfo.push(text);
            return text;
        });
        this.computerDiscontinuedDateTable.getText().then(function(text) {
            computerInfo.push(text);
            return text;
        });
        this.computerCompanyNameTable.getText().then(function(text) {
            computerInfo.push(text);
            return text;
        }); // TODO
    }
    navigateToEditComputerPage() {
        this.computerNameTable.click();
    }

    clickAddNewComputerButton() {
        this.addNewComputerButton.click();


    }
    deleteComputer() {
        this.deleteComputerButton.click();

    }



}
module.exports = IndexPage;