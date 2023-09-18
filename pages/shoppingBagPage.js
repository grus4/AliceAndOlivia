const { I } = inject();

module.exports = {
  buttons: {
    checkout: {
      xpath:
        '//a[@class="btn button-primary btn-block checkout-btn bfx-checkout "]',
    },

    continueToShipping: { xpath: './/button[@name="mock-edq-btn"]' },

    continueToPayment: { xpath: '//button[@value="submit-shipping"]' },

    removeProduct: {
      xpath:
        '//div[@class="hidden-md-down"]//button[@class="remove-btn-lg remove-product btn btn-light"]',
    },

    yes: {
      xpath: '//button[@class="btn btn-primary cart-delete-confirmation-btn"]',
    },
  },

  navigateToYourInformationStep() {
    I.click(this.buttons.checkout);
    I.wait(8);
    I.waitForVisible(this.buttons.continueToPayment, 10);
  },

  navigateToShippingStepRegisteredUser() {
    I.click(this.buttons.checkout);
    I.waitForNavigation(20);
    I.waitForVisible(this.buttons.continueToPayment, 20);
  },

  removeProductFromTheShoppingBag() {
    I.click(this.buttons.removeProduct);
    I.waitForVisible(this.buttons.yes, 5);
    I.waitForClickable(this.buttons.yes, 5);
    I.click(this.buttons.yes);
    I.waitForInvisible(this.buttons.yes, 10);
    I.wait(5);
  },

  checkTheEmptyShoppinBag() {
    I.see("Looks like your bag is empty");
  },
};
