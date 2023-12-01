
Cypress.Commands.add('loginToAcmeBank', () => {
    cy.visit('https://usdemo.vee24.com/#/')

    cy.get('.mat-form-field-infix')
    .children('[placeholder="Email"]')
    .type('leonardo@exemplo.com')

    cy.get('.mat-form-field-infix')
    .should('contain', 'Password')
    .children('[placeholder="Password"]')
    .type('123456')

    cy.get('.mat-raised-button').eq(0)
    .should('contain', 'Login').click()
});


Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

Cypress.Commands.add('getByClass', (className) => {
    return cy.get(`.${className}`)
})
