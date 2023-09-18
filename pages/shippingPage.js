const { I } = inject();

module.exports = {
  buttons: {
    continueToPayment: { xpath: '//button[@value="submit-delivery"]' },
  },

  labels: {
    creditLabel: { xpath: '//label[@id="lb_scheme"]' },
  },

  fields: {
    cardNumber: {
      xpath: '//span[@data-cse="encryptedCardNumber"]',
    },

    iframe: {
      xpath: './/iframe[@title="Iframe for secured card data input field"]',
    },
  },

  navigateToPaymentPage() {
    I.click(this.buttons.continueToPayment);
    I.wait(5);
    I.waitForVisible(this.fields.iframe, 40);
    I.waitForVisible(this.labels.creditLabel, 30);
    
  },
};
