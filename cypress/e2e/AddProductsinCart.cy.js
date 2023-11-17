describe('Add Products', () => {
  it('Add Products in Cart', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
})