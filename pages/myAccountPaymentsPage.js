const { creditCardVisa } = require("../userData/userData");
const { I } = inject();

module.exports = {
  fields: {
    iframe1: {
      css: '[data-cse="encryptedCardNumber"] iframe',
    },

    iframe2: {
      css: '[data-cse="encryptedExpiryDate"] iframe',
    },

    iframe3: {
      css: '[data-cse="encryptedSecurityCode"] iframe',
    },

    cardNumber: {
      xpath: './/input[@id="encryptedCardNumber"]',
    },

    expirationDate: {
      xpath: './/input[@id="encryptedExpiryDate"]',
    },

    cvv: {
      xpath: '//input[@id="encryptedSecurityCode"]',
    },

    nameOnTheCard: { css: '[classnamemodifiers="large"]' },
  },

  buttons: {
    saveNewCreditCard: { xpath: '//button[@value="add-new-payment"]' },

    removePayment: { xpath: '//button[@aria-label="Delete Payment"]' },

    confirmationDeletingPayment: {
      xpath: '//button[@class="btn btn-primary delete-confirmation-btn"]',
    },
  },

  fillOutNewCreditCardform(cardNumber, expDate, cvv, cardName) {
    I.switchTo(this.fields.iframe1);
    I.fillField(this.fields.cardNumber, cardNumber);
    I.switchTo();
    I.switchTo(this.fields.iframe2);
    I.fillField(this.fields.expirationDate, expDate);
    I.switchTo();
    I.switchTo(this.fields.iframe3);
    I.fillField(this.fields.cvv, cvv);
    I.switchTo();
    I.fillField(this.fields.nameOnTheCard, cardName);
  },

  saveNewCreditCard() {
    I.click(this.buttons.saveNewCreditCard);
    I.wait(10);
    I.waitForText(creditCardVisa.name, 5);
  },

  checkSavedCreditCard() {
    I.see(creditCardVisa.name);
  },

  removeCard() {
    I.click(this.buttons.removePayment);
    I.waitForVisible(this.buttons.confirmationDeletingPayment, 5);
    I.waitForClickable(this.buttons.confirmationDeletingPayment, 5);
    I.click(this.buttons.confirmationDeletingPayment);
  },
};
