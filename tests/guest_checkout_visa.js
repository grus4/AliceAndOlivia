const {
productId, shippingAddress, creditCardVisa
} = require("./../userData/userData");

Feature("checkout @S45a53700");

Scenario(
  "guest_checkout_visa @T103b7baa @smoke",
  ({
    I,
    homePage,
    productLandingPage,
    productDetailsPage,
    shoppingBagPage,
    yourInformationPage,
    shippingPage,
    paymentPage,
    confirmationPage,
  }) => {
      homePage.openHomePage();
      homePage.searchProduct(productId.id);
      productDetailsPage.addProductToBag();
      productDetailsPage.navigateToShoppingBag();
      shoppingBagPage.navigateToYourInformationStep();
      yourInformationPage.fillShippingForm(
        shippingAddress.emailAddress,
        shippingAddress.firstName,
        shippingAddress.lastName,
        shippingAddress.address1,
        shippingAddress.addres2,
        shippingAddress.city,
        shippingAddress.state,
        shippingAddress.zipCode,
        shippingAddress.phoneNumber
      );
      yourInformationPage.navigateToPaymentPage();
      pause();
      paymentPage.fillOutCreditCardform(
        creditCardVisa.creditCardNumber,
        creditCardVisa.expDate,
        creditCardVisa.cvv
      );
      paymentPage.placeOrder();
      confirmationPage.checkOrder();
  }
);
