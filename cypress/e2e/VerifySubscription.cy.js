describe('verify subscription', () => {
  it('Verify Subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#susbscribe_email').clear('heran@gmail.com');
    cy.get('#susbscribe_email').type('heran@gmail.com');
    cy.get('#subscribe > .fa').click();
    /* ==== End Cypress Studio ==== */
  })
})