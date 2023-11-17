describe('Add to cart', () => {
  it('from Recommended items', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#scrollUp > .fa').click({force:true});
    cy.get('#recommended-item-carousel > .right > .fa').click();
    cy.get('.active > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
    cy.get('u').click();
    /* ==== End Cypress Studio ==== */
  })
})