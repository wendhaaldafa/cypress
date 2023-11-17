describe('Verify Product quantity', () => {
  it('Verify Product quantity in Cart', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get('#quantity').click();
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
})