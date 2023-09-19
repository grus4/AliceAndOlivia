const { I } = inject();

module.exports = {
  fields: {
    firstName: { xpath: '//input[@id="shippingFirstNamedefault"]' },
    lastName: { xpath: '//input[@id="shippingLastNamedefault"]' },
    address1: { xpath: '//input[@id="shippingAddressOnedefault"]' },
    address2: { xpath: '//input[@id="shippingAddressTwodefault"]' },
    city: { xpath: '//input[@id="shippingAddressCitydefault"]' },
    state: { xpath: '//select[@id="shippingStatedefault"]' },
    zipCode: { xpath: '//input[@id="shippingZipCodedefault"]' },
    emailAddress: { xpath: '//input[@id="email"]' },
    phoneNumber: { xpath: '//input[@id="shippingPhoneNumberdefault"]' },
    cardNumber: {
      xpath: './/input[@data-fieldtype="encryptedCardNumber"]',
    },
  },

  elements: {
    iframe1: {
      css: '[data-cse="encryptedCardNumber"] iframe',
    },
  },

  buttons: {
    continueToShipping: { xpath: './/button[@name="mock-edq-btn"]' },
    continueToPayment: { xpath: '//button[@value="submit-shipping"]' },
  },

  fillShippingForm(
    emailAddress,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode,
    phoneNumber
  ) {
    I.fillField(this.fields.emailAddress, emailAddress);
    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.lastName, lastName);
    I.fillField(this.fields.address1, address1);
    I.fillField(this.fields.address2, address2);
    I.fillField(this.fields.city, city);
    I.selectOption(this.fields.state, state);
    I.fillField(this.fields.zipCode, zipCode);
    I.wait(5);
    I.refreshPage();
    I.wait(3);
    I.fillField(this.fields.phoneNumber, phoneNumber);
    I.scrollTo(this.buttons.continueToPayment);
  },

  navigateToPaymentPage() {
    I.click(this.buttons.continueToPayment);
    I.wait(8);
    I.waitForElement(this.elements.iframe1, 5);
  },
};
