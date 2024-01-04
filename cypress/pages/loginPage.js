class loginPage{
    elements ={
        getNameInput: () => cy.get('#firstname').click(),
        getLastNameInput: () => cy.get('#lastname').click(),
        getEmailInput: () => cy.get('#email_address').click(),
        getPasswordInput: ()=> cy.get("#password").click(),
        getPasswordConfirmationInput: () => cy.get('#password-confirmation').click(),
        getCreateAnAccountButton: () => cy.get('button[type="submit"]').contains('Create an Account'),
        getSuccessMessage: () => cy.get('.message-success'),
        getErrorMessage :() => cy.contains('This is a required field.'),
        getEmailAlreadyExistMessage: () => cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.'),
        getValidEmailMessage: () => cy.contains('Please enter a valid email address'),
        getSamePasswordMessage: () => cy.contains('Please enter the same value again.'),
    }
    typeUserName(name){
        this.elements.getNameInput().type(name);
    }
    typeUserLastName(lastName){
        this.elements.getLastNameInput().type(lastName);
    }
    typeUserEmail(email){
        this.elements.getEmailInput().type(email);
    }
    typeUserPassword(password){
        this.elements.getPasswordInput().type(password);
    }
    typeConfirmationPassword(password){
        this.elements.getPasswordConfirmationInput().type(password);
    }
    clickCreateAnAccountButton(){
        this.elements.getCreateAnAccountButton().click();
    }
    checkIfNameInputAppears(){
        this.elements.getNameInput().should('be.visible').should('exist');
    }
    checkIfLastNameInputAppears(){
        this.elements.getLastNameInput().should('be.visible').should('exist');
    }
    checkIfEmailInputAppears(){
        this.elements.getEmailInput().should('be.visible').should('exist');
    }
    checkIfPasswordInputAppears(){
        this.elements.getPasswordInput().should('be.visible').should('exist');
    }
    checkIfPasswordConfirmationInputAppears(){
        this.elements.getPasswordConfirmationInput().should('be.visible').should('exist');
    }
    checkIfCreateAnAccountButtonAppears(){
        this.elements.getCreateAnAccountButton().should('be.visible').should('exist');
    }
    checkIfErrorMessageAppears(){
        this.elements.getErrorMessage().should('be.visible');
    }
    checkIfEmailAlreadyExistMessageAppears(){
        this.elements.getEmailAlreadyExistMessage().should('exist').should('be.visible');
    }
    checkifSuccessMessageAppears(){
        this.elements.getSuccessMessage().should('contain','Thank you for registering with Main Website Store.');
    }
    checkIfValidEmailMessageAppears(){
        this.elements.getValidEmailMessage().should('be.visible').should('exist');
    }
    checkIfSamePasswordMessageAppears(){
        this.elements.getSamePasswordMessage().should('be.visible').should('exist');
    }
}

module.exports = new loginPage();
