'use strict';

class BasePage {
    constructor() {
        this.appNameHeader = $('.fill>a');
        this.addCompHeader = $('#main>h1');
    }



    getPageHeader() {
        return this.addCompHeader.getText().then(function(text) {
            return text;
        });
    }
    isElementVisible(element) {
        return element.isDisplayed();
    }

    getAppHeader() {
        return this.appNameHeader.getText().then(function(text) {
            return text;
        });
    }
    isElementExist(element) {
        return element.isPresent();
    }

    clickButton(buttonName) {
        buttonName.click();
    }
}

module.exports = BasePage;