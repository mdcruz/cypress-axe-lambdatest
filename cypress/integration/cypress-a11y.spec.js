/// <reference types="cypress" />

describe('Accessibility', () => {
  it('should run accessibility audits', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
    cy.injectAxe();

    // scans the entire page by default
    cy.checkA11y();

    // scans the specific selector only
    // cy.checkA11y('#entry_217838 p');

    // exclude specific elements
    // cy.checkA11y({ exclude: ['#entry_217838 p'] });
  });
});
