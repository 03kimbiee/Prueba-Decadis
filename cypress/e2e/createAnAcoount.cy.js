import loginPage from "../pages/loginPage.js"
describe('Check the Login Page', () => {
    xit('Create a new user', () => {
      cy.fixture('user.json').then((data) => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        loginPage.typeUserName('Ronnie');
        loginPage.typeUserLastName('Cost');
        loginPage.typeUserEmail(data.email);
        loginPage.typeUserPassword(data.password);
        loginPage.typeConfirmationPassword(data.password);
        loginPage.clickCreateAnAccountButton();
        cy.wait(5000);
        cy.get('.message-success').should('contain','Thank you for registering with Main Website Store.');
      });
    });

    it('Check required Fields', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
      loginPage.checkIfNameInputAppears();
      loginPage.checkIfLastNameInputAppears();
      loginPage.checkIfEmailInputAppears();
      loginPage.checkIfPasswordInputAppears();
      loginPage.checkIfPasswordConfirmationInputAppears();
      loginPage.clickCreateAnAccountButton();
      loginPage.checkIfErrorMessageAppears();
    });

    it('Try to create a new account with an existing email ', () => {
      cy.intercept('GET', 'https://magento.softwaretestingboard.com/customer/section/load/**&force_new_section_timestamp=false&_=**').as('waitForErrorMessage');

      cy.fixture('user.json').then((data) => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
        loginPage.typeUserName('Ronnie');
        loginPage.typeUserLastName('Cost');
        loginPage.typeUserEmail(data.email);
        loginPage.typeUserPassword(data.password);
        loginPage.typeConfirmationPassword(data.password);
        loginPage.clickCreateAnAccountButton();
        cy.wait('@waitForErrorMessage')
        loginPage.checkIfEmailAlreadyExistMessageAppears();
      });
    });

    it(' ', () => {

    });
  });
