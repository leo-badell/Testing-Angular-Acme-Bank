describe('Simple Applitools Test', () => {
    beforeEach(() => {
        // Start Applitools Visual Test
        cy.eyesOpen({
            appName: 'Angular Acme Bank',
            testName: 'Testing Angular with Applitools',
        });

        // Login to ACME Bank
        cy.loginToAcmeBank();
    });

    it('should look the same', () => {
        // Full Page - Visual AI Assertion
        cy.eyesCheckWindow('Home page');
    });

    afterEach(() => {
        // End Applitools Visual Test
        cy.eyesClose();
    });
});