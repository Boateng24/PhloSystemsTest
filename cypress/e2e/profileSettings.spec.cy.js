describe('Profile settings test', () => {
    it('should make changes to the profile settings',() => {
        cy.login();
        cy.wait(10000)
        cy.contains('my account', {matchCase: false}).click()
        cy.get("#my-account-dropdown>:nth-child(3)").click().then(() => {
            cy.fixture("phlo.png").then((fileContent) => {
                cy.get('input[type="file"]').attachFile({
                  fileContent: fileContent.toString(),
                  fileName: "phlo.png",
                  mimeType: "image/jpeg",
                  filePath: "../../../fixtures/phlo.png",
                });
                cy.contains('upload image', {matchCase: false}).click();
            })
        });
          cy.contains(
            "Thank you for uploading your avatar. It will be checked by Guardian moderators shortly.",
            ).should('be.visible');
    })
})