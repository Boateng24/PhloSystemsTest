// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "cypress-file-upload";

Cypress.Commands.add('login', () => {
    const email = Cypress.env("EMAIL");
    const password = Cypress.env("PASSWORD");

    cy.visit("/");
    cy.wait(3000);
   cy.window().then((win) => {
       cy.stub(win, 'confirm').returns(true)
   })
  
    cy.contains("sign in", { matchCase: false}).click({force:true});
    cy.url().should("contain", "signin");
    cy.get("input[name='email']").type(email, { force: true });
    cy.get("input[name='password']").type(password, { force: true });
    cy.get("[data-cy='main-form-submit-button']").click({force:true});
})


