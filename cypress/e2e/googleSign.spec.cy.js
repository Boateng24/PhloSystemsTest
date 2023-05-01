describe("Sign in with Google", () => {
   
  it("should sign in successfully", () => {
    // Open the Guardian website
    cy.visit("https://www.theguardian.com/uk");

    // Click on the sign-in button
    cy.contains("Sign in").click();

    // Click on the sign in with Google button
    cy.get('[data-link-name="google-social-button"]').click();
   cy.origin("https://accounts.google.com", () => {
     const email = Cypress.env("EMAIL");
     cy.get('[aria-label="Email or phone"]').type(email, { force: true });
     cy.contains("Next", { matchCase: false }).click();

     // Wait for the Google authorization page to load
     cy.url().should("include", "accounts.google.com");

     // Extract the authorization code from the redirect URI
     cy.url().then((url) => {
       try {
         const searchParams = new URL(url).searchParams;
         const authorizationCode = searchParams.get("code");
         expect(authorizationCode).to.not.be.null;

         // Perform the OAuth 2.0 authentication flow
         cy.request({
           method: "POST",
           url: "https://oauth2.googleapis.com/token",
           body: {
             grant_type: "authorization_code",
             code: authorizationCode,
             client_id: "774465807556.apps.googleusercontent.com",
             redirect_uri: "https://profile.theguardian.com",
           },
         }).then((response) => {
           // Check that the response contains the access token
           expect(response.body).to.have.property("access_token");
         });
       } catch (error) {
         // Handle any errors that occur when parsing the URL
         cy.log(`Failed to extract authorization code from URL: ${url}`);
         cy.wrap(error).as("urlError");
       }
     });
   });
  });
});
