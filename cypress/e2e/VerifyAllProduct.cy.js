describe('verify product', () => {
  it('verify all product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(5) > .product-image-wrapper > .choose > .nav > li > a').click();
    /* ==== End Cypress Studio ==== */
  })
})