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
      xpath: './/input[@data-fieldtype="encryptedCardNumber"]',
    },
    expirationDate: {
      xpath: './/input[@id="encryptedExpiryDate"]',
    },
    cvv: {
      xpath: '//input[@id="encryptedSecurityCode"]',
    },

    payPalEmailField: { xpath: '//input[@id="email"]' },

    payPalPasswordField: { xpath: '//input[@id="password"]' },
  },

  buttons: {
    placeOrder: {
      xpath:
        '//div[@class="col-12 next-step-button show-desktop"]//button[@value="submit-payment"]',
    },

    continueToAfterpay: {
      xpath:
        '//button[@class="btn btn-primary btn-block submit-payment place-order afterpay-styling styled"]',
    },

    continue: { xpath: '//button[@data-testid="login-password-button"]' },

    confirm: {
      xpath: '//button[@data-dd-action-name="Confirm Checkout Button"]',
    },

    continueToPayPal: {
      xpath:
        '//button[@class="btn btn-primary btn-block submit-payment place-order paypal-styling styled"]',
    },

    loginPayPal: { xpath: '//button[@id="btnLogin"]' },

    agreeAndPayNow: { xpath: '//button[@id="payment-submit-btn"]' },

    apply: {
      xpath:
        '//button[@class="btn btn-primary btn-outline-primary btn-block promo-code-btn"]',
    },
  },

  elements: {
    userNamefield: { xpath: '//input[@name="identifier"]' },

    passwordField: { xpath: '//input[@name="password"]' },

    afterPayRadioButton: { xpath: '//label[@id="lb_afterpaytouch"]' },

    payPalRadioButton: { xpath: '//label[@id="lb_paypal"]' },

    ashleyStewartRadioButton: { xpath: '//label[@id="lb_ashleyCC"]' },

    ashleyStewartCarNumberField: {
      xpath: '//input[@class="ashley-card-number form-control cs_pii"]',
    },

    ashleyStewartNameField: { xpath: '//input[@id="cardOwner"]' },

    promoField: { xpath: '//input[@id="couponCode"]' },
  },

  fillOutCreditCardform(cardNumber, expDate, cvv) {
    I.switchTo(this.fields.iframe1);
    I.fillField(this.fields.cardNumber, cardNumber);
    I.switchTo();
    I.switchTo(this.fields.iframe2);
    I.fillField(this.fields.expirationDate, expDate);
    I.switchTo();
    I.switchTo(this.fields.iframe3);
    I.fillField(this.fields.cvv, cvv);
    I.switchTo();
  },

  selectAndPlaceOrderWithAfterpay(username, password) {
    I.click(this.elements.afterPayRadioButton);
    I.click(this.buttons.continueToAfterpay);
    I.wait(16);
    I.fillField(this.elements.passwordField, password);
    I.click(this.buttons.continue);
    I.waitForVisible(this.buttons.confirm, 15);
    I.click(this.buttons.confirm);
    I.wait(16);
    I.waitForText("Receipt", 20);
  },

  selectAndPlaceOrderWithPayPal(userName, password) {
    I.click(this.elements.payPalRadioButton);
    I.click(this.buttons.continueToPayPal);
    I.wait(10);
    I.waitForVisible(this.fields.payPalEmailField, 16);
    I.clearField(this.fields.payPalEmailField);
    I.fillField(this.fields.payPalEmailField, userName);
    I.fillField(this.fields.payPalPasswordField, password);
    I.click(this.buttons.loginPayPal);
    I.waitForVisible(this.buttons.agreeAndPayNow, 15);
    I.click(this.buttons.agreeAndPayNow);
    I.wait(16);
    I.waitForText("Receipt", 20);
  },

  selectAndPlaceOrderWithAshleyStewartCard(cardNumber, cardName) {
    I.click(this.elements.ashleyStewartRadioButton);
    I.fillField(this.elements.ashleyStewartCarNumberField, cardNumber);
    I.fillField(this.elements.ashleyStewartNameField, cardName);
  },

  applyPromoOrderDiscount(promoCode) {
    I.fillField(this.elements.promoField, promoCode);
    I.click(this.buttons.apply);
    I.wait(5);
    I.see(promoCode + " has been applied");
    I.see("Order Discount");
  },

  applyPromoShippingDiscount(promoCode) {
    I.fillField(this.elements.promoField, promoCode);
    I.click(this.buttons.apply);
    I.wait(5);
    I.see(promoCode + " has been applied");
    I.see("Shipping Discount");
  },

  placeOrder() {
    I.click(this.buttons.placeOrder);
    I.wait(15);
    I.waitForText("Receipt", 10);
  },
};
