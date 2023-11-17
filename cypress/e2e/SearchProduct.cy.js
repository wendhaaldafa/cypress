describe('search product', () => {
  it('search product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('T');
    cy.get('#search_product').type('Tshirt');
    cy.get('#submit_search').click();
    /* ==== End Cypress Studio ==== */
  })
})