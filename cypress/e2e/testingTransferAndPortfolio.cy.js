

describe('Testing transfer and portfolio', () => {

beforeEach(() => {
    
    cy.loginToAcmeBank();
    cy.wait(1000); 
    
});

it('Make a transfer', () => {
    cy.getByClass('mat-card-content')
        .find('button.mat-raised-button')
        .should('contain', 'Transfer Money').eq(0).click();

    cy.getByClass('mat-card-subtitle').then(item => {
        expect(item).to.contain.text('Here at Acme Bank transfers are quick and easy:');
        cy.wrap(item).find('ul', [0]).should('include.text', 'Transfers between accounts are free');
        cy.wrap(item).find('ul', [1]).should('include.text', 'Transfers outside of Acme Bank are $15 per transfer and take 24 hours to clear');
    });

    cy.getByClass('mat-card-content').find('.example-form').then(dropdown => {
        cy.wrap(dropdown).find('[class="mat-select-arrow-wrapper"]').eq(0).click();
        cy.get('.cdk-overlay-pane', { timeout: 5000 }).should('be.visible');
        cy.get('.cdk-overlay-pane').find('.mat-option-text').eq(1).click();
    });

    cy.getByClass('mat-card-content').find('.example-form').then(dropdown => {
        cy.wrap(dropdown).find('[class="mat-select-arrow-wrapper"]').eq(1).click();
        cy.get('.cdk-overlay-pane', { timeout: 5000 }).should('be.visible');
        cy.get('.cdk-overlay-pane').find('.mat-option-text').eq(3).click();
    });

    cy.getByClass('mat-form-field-infix').find('[placeholder="Amount"]').type('2500');
    cy.getByClass('mat-form-field-infix').find('[placeholder="Social Security Number"]').type('357.951.995-58');
    cy.getByClass('mat-form-field-infix').find('[placeholder="ATM PIN"]').type('5432 9100 5955 1850');
    cy.get('button[type="button"]').should('contain', 'Transfer Funds').click();
});

it('Portfolio', () => {
    cy.getByClass('mat-card-content')
        .find('button.mat-raised-button')
        .should('contain', 'Portfolio').eq(1).click();

    cy.getByClass('mat-card').then(item => {
        expect(item).to.contain.text('Your Portfolio');
        cy.wrap(item).find('mat-card-subtitle', [0]).should('include.text', 'Investing made easy! Take a look at your current portfolio and see how much money you\'re making.');
        cy.wrap(item).find('mat-card-subtitle', [1]).should('include.text', 'Remember, you\'re rich because of Acme Bank!');
    });

    cy.getByClass('ngx-charts').find('.number-card').each((card) => {
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 8.940 ');
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 5.000 ');
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 7.200 ');
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 6.200 ');
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 4.200 ');
        cy.wrap(card).find('[class="value-text"]').should('contain', ' 8.200 ');
    });

    cy.getByClass('ngx-charts').then(chart => {
        cy.wrap(chart[1]).find('.pie-chart.chart').each($arc => {
            cy.wrap($arc).find('[class="pie-label animation"]');

            const arc = '.ng-star-inserted';
            const labels = ['ATVI', 'XOM', 'AAPL', 'QQQ', 'PCLN', 'NFLX'];

            labels.forEach((label) => {
                cy.get(arc).should('be.visible').realHover();
                cy.contains(label).should('exist').next().realHover().realMouseDown();
                cy.get(arc).should('be.visible').realHover();
                cy.contains(label).should('exist').next().realHover().realMouseUp();
            });
        });
    });
});


})




