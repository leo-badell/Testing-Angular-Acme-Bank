
describe('Testing Angular Acme Bank', () => {

  beforeEach(() => {
    
    cy.loginToAcmeBank();
    cy.wait(1000); 

  });

  //This code is for testing the home page and its elements.
  it('Should test the first page of Acme Bank', () => {
    cy.get('.mat-toolbar').invoke('text').then(text => {
      cy.wrap(text)
        .should('contain', 'Acme Bank')
        .and('contain', 'Home')
        .and('contain', 'Transfer')
        .and('contain', 'Portfolio')
        .and('contain', 'Loans')
        .and('contain', 'LogOut');

      cy.getByClass('card.mat-card').find('ul').then(cardLocator => {
          cy.wrap(cardLocator).find('li').eq(0)
          .should('contain', 'No Application');
          cy.wrap(cardLocator).find('li').eq(1)
          .should('contain', 'No Credit Check');  
          cy.wrap(cardLocator).find('li').eq(2)
            .should('contain', 'No Origination Fee');
        });
    });

    cy.getByClass('mat-card-title')
      .children('h3')
      .should('contain', 'Recent Transactions');

    cy.get('tbody')
      .find('tr')
      .each($row => {
        cy.wrap($row)
          .find('td')
          .each($cell => {
            cy.wrap($cell).invoke('text').then(text => {
              if (text.length <= 60) {
                cy.log('It passes');
              } else {
                cy.log('Too many elements');
              }
            });
          });
      });
  });

  //This code validates a loan application in Angular Acme Bank.
  it('Should submit a Loan in Acme Bank', () => {
    
  cy.contains('button', 'Click here to learn more!').click();

  cy.getByClass('mat-horizontal-content-container').find('form').then(form => {
      cy.wrap(form).find('[placeholder="First name, Last name"]').type('Daniela de Aguiar Jr.');
      cy.wrap(form).find('[placeholder="Street, City, Zip Code"]').type('Tv Djalma Dutra');
      cy.wrap(form).find('[class="mat-select-arrow-wrapper"]').click();
      cy.get('.cdk-overlay-pane', { timeout: 1000 }).should('be.visible');
      cy.get('.cdk-overlay-pane').find('mat-option').eq(2).click();
      cy.wrap(form).find('[placeholder="Ex. 1 Year"]').type('5 years');
    });

  cy.get('button[type="submit"]').should('contain', 'Next').eq(0).click();
  

  cy.get('.mat-horizontal-content-container').find('.mat-horizontal-stepper-content').then(form => {
      const inputs = form.find('[class="mat-form-field-wrapper"]');
      const labels = form.find('mat-label');

      cy.wrap(inputs[4]).find('[class="mat-form-field-infix"]').type('50000');
      cy.wrap(labels[4]).invoke('text').then(text => {
        expect(text).to.equal('Amount');

        cy.wrap(inputs[5]).find('[class="mat-form-field-infix"]')
          .type('Andreia Gabriela Silvana');
        cy.wrap(labels[5]).invoke('text').then(text => {
          expect(text).to.equal('Mother\'s Maiden Name');

          cy.wrap(inputs[6]).find('[class="mat-form-field-infix"]')
            .type('681.17136.15-7');
          cy.wrap(labels[6]).invoke('text').then(text => {
            expect(text).to.equal('Social Security Number');
          });

          cy.get('button.mat-button').invoke('show')
            .find('[class="mat-button-wrapper"]')
            .should('contain', 'Next').eq(2).click();
          

          cy.get('button.v24DomSyncDenyAgent')
            .find('[class="mat-button-wrapper"]').should('contain', 'Confirm').click();
            
            
        });
    });
});
});
})




  
  