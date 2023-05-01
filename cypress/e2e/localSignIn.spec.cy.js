describe('sign in with email and password', () => {
  const email = Cypress.env('EMAIL')
  const password = Cypress.env('PASSWORD')
  
  it('successfully log in a user with valid email and password on the guardina website', () => {
    cy.visit('/');
    cy.contains('sign in', {matchCase: false, force:true}).click();
    cy.url().should('contain', 'signin');
    cy.get("input[name='email']").type(email, {force:true});
    cy.get("input[name='password']").type(password, {force:true});
    cy.get("[data-cy='main-form-submit-button']").click();
  })
})