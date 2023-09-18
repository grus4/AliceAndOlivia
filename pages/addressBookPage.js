const { newUserAddress } = require("../userData/userData");
const { I } = inject();

module.exports = {
  elements: {
    addressTitleField: { xpath: '//input[@id="addressId"]' },

    firstNameField: { xpath: '//input[@id="firstName"]' },

    lastNameField: { xpath: '//input[@id="lastName"]' },

    address1Field: { xpath: '//input[@id="address1"]' },

    address2Field: { xpath: '//input[@id="address2"]' },

    cityField: { xpath: '//input[@id="city"]' },

    stateDropDownField: { xpath: '//select[@id="state"]' },

    zipCodeField: { xpath: '//input[@id="zipCode"]' },

    phoneNumberField: { xpath: '//input[@id="phone"]' },
  },

  buttons: {
    save: { xpath: '//button[@id="form-submit"]' },

    removeAddress: {
      xpath: '//button[@class="remove-btn remove-address btn-light cs_pii"]',
    },

    confirmationDeletingAddress: {
      xpath: '//button[@class="btn btn-primary delete-confirmation-btn"]',
    },
  },

  fillAddNewAddressForm(
    addressTitle,
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode,
    phoneNumber
  ) {
    I.fillField(this.elements.addressTitleField, addressTitle);
    I.fillField(this.elements.firstNameField, firstName);
    I.fillField(this.elements.lastNameField, lastName);
    I.fillField(this.elements.address1Field, address1);
    I.fillField(this.elements.address2Field, address2);
    I.fillField(this.elements.cityField, city);
    I.selectOption(this.elements.stateDropDownField, state);
    I.fillField(this.elements.zipCodeField, zipCode);
    I.fillField(this.elements.phoneNumberField, phoneNumber);
  },

  saveNewAddress() {
    I.click(this.buttons.save);
    I.wait(10);
    I.waitForText(newUserAddress.addressTitle, 5);
  },

  checkSavedAddress() {
    I.see(newUserAddress.addressTitle);
  },

  removeAddress() {
    I.click(this.buttons.removeAddress);
    I.waitForVisible(this.buttons.confirmationDeletingAddress, 5);
    I.waitForClickable(this.buttons.confirmationDeletingAddress, 5);
    I.click(this.buttons.confirmationDeletingAddress);
  },
  
};
