describe('View & Cart', () => {
  it('Brand Product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('body > :nth-child(3)').click({force:true});
    cy.get('.brands-name > .nav > :nth-child(2) > a').click();
    cy.get('section').click();
    cy.get('.brands-name > .nav > :nth-child(1) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})