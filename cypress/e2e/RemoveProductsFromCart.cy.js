describe('Remove Product', () => {
  it('form chart', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.footer-widget').click();
    cy.get('.cart_quantity_delete > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})