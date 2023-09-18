const { I } = inject();

module.exports = {
  
  firstProductTile: {
    xpath: '//div[@class="row product-grid"]/div[@data-position="1"]',
  },

  buttons: {
    addToBag: { xpath: '//button[normalize-space()="Add to Cart"]' },

    sizeSwatch: {
      xpath:
        '//button[@class="base-swatch size-attribute"]//span[contains(text(), "14/16")]',
    },
  },

  navigateToProductDetailPage() {
    I.click(this.firstProductTile);
    I.waitForNavigation(20);
    I.waitForVisible(this.buttons.addToBag, 20);
    I.waitForVisible(this.buttons.sizeSwatch, 10);
    I.seeElement(this.buttons.sizeSwatch);
  },
};
