const { I } = inject();

module.exports = {
  buttons: {
    addToBag: { xpath: '//button[normalize-space()="ADD TO BAG"]' },

    addToBagGiftCard: {
      css: ".add-to-cart.btn.btn-block.btn-primary.gift-card-add-to-cart",
    },

    sizeSwatch: {
      xpath: '//button[@data-value-id="M"]',
    },

    plusQty: { xpath: '//button[@class="qty-btn-plus"]' },

    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    checkout: {
      xpath:
        '//a[@class="btn button-primary btn-block checkout-btn bfx-checkout "]',
    },

    selectStoreLink: {
      xpath: '//a[contains(text(), "select store")]',
    },

    selectThisStore: {
      xpath: '//button[contains(text(), "Select This Store")]',
    },

    closePromoPopup: { xpath: '//button[@id="closeIconContainer"]' },
  },

  elements: {
    zipCodeField: { xpath: '//input[@id="store-postal-code"]' },

    magnifierIcon: {
      xpath:
        '//button[@class="btn btn-primary btn-block btn-storelocator-search"]',
    },

    storeRadioButton: { xpath: '//input[contains(@id, "New-York")]' },

    miniBagQty: { xpath: '//span[@class="minicart-quantity"]' },

    customAmountField: { xpath: '//input[@name="giftCardAmount"]' },

    giftCardToField: { xpath: '//input[@name="giftCardTo"]' },

    giftCardFromField: { xpath: '//input[@name="giftCardFrom"]' },

    giftCardRecepientsEmailField: {
      xpath: '//input[@name="giftCardFriendsEmail"]',
    },

    giftCardConfirmRecepientsEmailField: {
      xpath: '//input[@name="giftCardConfirmFriendsEmail"]',
    },

    giftCardMessageField: { xpath: '//textarea[@id="giftCardMessage"]' },
  },

  addProductToBag() {
    //I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    I.wait(3);
    I.click(this.buttons.addToBag);
    I.wait(5);
    I.waitForClickable(this.buttons.shoppingBagIcon, 5);
  },

  navigateToShoppingBag() {
    I.click(this.buttons.shoppingBagIcon);
    I.wait(5);
    I.waitForVisible(this.buttons.checkout, 10);
    I.waitForClickable(this.buttons.checkout, 10);
  },

  addBopisAndShipToHomeProductsToBag(zipCode) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    I.waitForClickable(this.buttons.addToBag, 5);
    I.click(this.buttons.addToBag);
    I.wait(5);
    I.waitForVisible(this.buttons.selectStoreLink, 5);
    I.click(this.buttons.selectStoreLink);
    I.waitForVisible(this.elements.zipCodeField, 5);
    I.fillField(this.elements.zipCodeField, zipCode);
    I.click(this.elements.magnifierIcon);
    I.wait(3);
    I.waitForClickable(this.elements.storeRadioButton, 5);
    I.click(this.elements.storeRadioButton);
    I.waitForClickable(this.buttons.selectThisStore, 5);
    I.click(this.buttons.selectThisStore);
    I.waitForClickable(this.buttons.addToBag, 5);
    I.click(this.buttons.addToBag);
  },

  addElectronicGiftCardToBag(
    giftCardAmount,
    toName,
    fromName,
    recepientsEmail,
    giftMessage
  ) {
    I.refreshPage();
    I.fillField(this.elements.customAmountField, giftCardAmount);
    I.fillField(this.elements.giftCardToField, toName);
    I.fillField(this.elements.giftCardFromField, fromName);
    I.fillField(this.elements.giftCardRecepientsEmailField, recepientsEmail);
    I.fillField(
      this.elements.giftCardConfirmRecepientsEmailField,
      recepientsEmail
    );
    I.fillField(this.elements.giftCardMessageField, giftMessage);
    I.click(this.buttons.addToBagGiftCard);
  },

  async addMultipleItemsToBag(quantity) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    let miniBagQty = 0;
    for (i = 1; i <= quantity; i++) {
      I.waitForVisible(this.buttons.addToBag, 20);
      I.waitForClickable(this.buttons.addToBag, 20);
      I.click(this.buttons.addToBag);
      I.wait(3);
    }
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  },

  async addMultipleItemsToBagByClickingPlusButton(quantity) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    for (i = 1; i < quantity; i++) {
      I.waitForVisible(this.buttons.plusQty, 5);
      I.waitForClickable(this.buttons.plusQty, 5);
      I.click(this.buttons.plusQty);
      I.wait(3);
    }
    I.waitForVisible(this.buttons.addToBag, 20);
    I.waitForClickable(this.buttons.addToBag, 20);
    I.click(this.buttons.addToBag);
    I.wait(3);
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  },
};
