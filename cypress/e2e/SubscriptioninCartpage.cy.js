describe('Subscription', () => {
  it('subscription in cart page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('#susbscribe_email').clear('heran@gmail.com');
    cy.get('#susbscribe_email').type('heran@gmail.com');
    cy.get('#subscribe').click();
    /* ==== End Cypress Studio ==== */
  })
})