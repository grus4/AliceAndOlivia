const { I } = inject();

module.exports = {
  buttons: {
    closePopup: { xpath: '//button[@class="Close-widget-wrapper"]' },
  },

  elements: {
    orderNumber: {
      xpath: '//span[@class="summary-details order-number cs_pii"]'
    }

  },

  checkOrder() {
    I.see('Receipt'); 
  }

};

