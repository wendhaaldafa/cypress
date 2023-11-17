describe('Add review', () => {
  it('Add review on product', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#name').clear('p');
    cy.get('#name').type('pikri');
    cy.get('#email').clear('p');
    cy.get('#email').type('pikri@gmail.com');
    cy.get('#review').click();
    cy.get('#button-review').click();
    /* ==== End Cypress Studio ==== */
  })
})