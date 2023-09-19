const { I } = inject();

module.exports = {
  elements: {
    newArrivalsCategory: { xpath: './/a[@id="new"]' },
    clothingCategory: { xpath: './/a[@id="clothing"]' },
    searchField: {
      xpath: '//input[@class="form-control search-field"]',
    },
    magnifierIcon: {
      xpath: '//button[@class="search search-toggle-btn-main"]',
    },
    productTile: { xpath: '//a[@class="nav-link"]/img' },
  },

  firstProductTile: {
    xpath: './/div[@id="tileCarousel-041-16395"]',
  },

  firstProductTileStg: {
    xpath: '//div[@class="row product-grid"]/div[@data-position="1"]',
  },

  openHomePage() {
    I.amOnPage("/");
    I.wait(5);
  },

  openPlPStg() {
    I.click(this.elements.newArrivalsCategory);
    I.waitForNavigation(10);
    I.wait(5);
    I.scrollTo(this.firstProductTileStg);
  },

  searchProduct(productId) {
    I.click(this.elements.magnifierIcon);
    I.fillField(this.elements.searchField, productId);
    I.wait(5);
    I.waitForVisible(this.elements.productTile, 5);
    I.click(this.elements.productTile);
    I.wait(10);
  },
};
