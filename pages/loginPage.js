const { I } = inject();

module.exports = {
  elements: {
    emailField: { xpath: '//input[@id="login-form-email"]' },

    passwordField: { xpath: '//input[@id="login-form-password"]' },

    errorMessage: { xpath: '//div[@class="alert alert-danger"]' },

    emptyEmailFieldErrorMessage: { xpath: '//div[@id="form-email-error"]' },

    emptyPasswordFieldErrorMessage: {
      xpath: '//div[@id="form-password-error"]',
    },

    createAccountTab: { xpath: '//a[@id="register-tab"]' },

    firstNameCreateAccountForm: {
      xpath: '//input[@id="registration-form-fname"]',
    },

    lastNameCreateAccountForm: {
      xpath: '//input[@id="registration-form-lname"]',
    },

    phoneNumberCreateAccountForm: {
      xpath: '//input[@id="registration-form-phone"]',
    },

    emailFieldCreateAccountForm: {
      xpath: '//input[@id="registration-form-email"]',
    },

    comnfirmEmailFieldCreateAccountForm: {
      xpath: '//input[@id="registration-form-email-confirm"]',
    },

    passwordFieldCreateAccountForm: {
      xpath: '//input[@id="registration-form-password"]',
    },

    confirmPasswordFieldCreateAccountForm: {
      xpath: '//input[@id="registration-form-password-confirm"]',
    },

    profileText: { xpath: '//h5[@class="pull-left profile-header"]' },
  },

  buttons: {
    login: { xpath: './/button[text()="Login"]' },

    createAccount: { xpath: '//button[@name="save"]' },
  },

  loginWithValidData(email, password) {
    I.fillField(this.elements.emailField, email);
    I.fillField(this.elements.passwordField, password);
    I.click(this.buttons.login);
    I.waitForNavigation(5);
    I.wait(5);
  },

  loginWithInvalidPassword(email, invalidPassword) {
    I.fillField(this.elements.emailField, email);
    I.fillField(this.elements.passwordField, invalidPassword);
    I.click(this.buttons.login);
    I.waitForElement(this.elements.errorMessage, 5);
  },

  loginWithInvalidEmail(invalidEmail, password) {
    I.fillField(this.elements.emailField, invalidEmail);
    I.fillField(this.elements.passwordField, password);
    I.click(this.buttons.login);
    I.waitForElement(this.elements.errorMessage, 5);
  },

  loginWithEmptyFields() {
    I.click(this.buttons.login);
    I.waitForElement(this.elements.emptyEmailFieldErrorMessage, 5);
  },

  checkErrorMessage() {
    I.seeTextEquals(
      "Invalid login or password. Remember that password is case-sensitive. Please try again.",
      this.elements.errorMessage
    );
  },

  checkEmptyFieldsErrorMessages() {
    I.see(
      "Please fill out this field.",
      this.elements.emptyEmailFieldErrorMessage
    );
    I.see(
      "Please fill out this field.",
      this.elements.emptyPasswordFieldErrorMessage
    );
  },

  openCreateAccountTab() {
    I.click(this.elements.createAccountTab);
  },

  createAccountWithValidData(
    firstName,
    lastName,
    phoneNumber,
    password,
    confirmPassword
  ) {
    I.fillField(this.elements.firstNameCreateAccountForm, firstName);
    I.fillField(this.elements.lastNameCreateAccountForm, lastName);
    I.fillField(this.elements.phoneNumberCreateAccountForm, phoneNumber);
    let randomEmail = "test" + Math.floor(Math.random() * 10000) + "@gmail.com";
    I.fillField(this.elements.emailFieldCreateAccountForm, randomEmail);
    I.fillField(this.elements.comnfirmEmailFieldCreateAccountForm, randomEmail);
    I.fillField(this.elements.passwordFieldCreateAccountForm, password);
    I.fillField(
      this.elements.confirmPasswordFieldCreateAccountForm,
      confirmPassword
    );
    I.click(this.buttons.createAccount);
    I.waitForNavigation(10);
    I.waitForVisible(this.elements.profileText, 10);
  },
};
