
const { I, headerFragment } = inject();

module.exports = {
  elements: {
    profileText: { xpath: '//h5[@class="pull-left profile-header"]' },
  },

  buttons: {
    logout: { xpath: '//a[@role="menuitem"][normalize-space()="Logout"]' },
  },

  links: {
    addNewAddress: { xpath: '//a[@aria-label="Add New Address"]' },

    addNewPayment: { xpath: '//a[@aria-label="Add New Payment"]' },
  },

  checkMyAccountPage() {
    I.see("Profile", this.elements.profileText);
  },

  logoutFromAccount() {
    headerFragment.hoverOverAccountIcon();
    I.click(this.buttons.logout);
    I.wait(3);
  },

  navigateToAddressBook() {
    I.click(this.links.addNewAddress);
    I.wait(5);
    I.waitForText("Add New Address", 5);
  },

  navigateToPaymentsPage() {
    I.click(this.links.addNewPayment);
    I.wait(5);
    I.waitForText("Add New Payment", 5);
  },
};
