describe('Verify Scroll', () => {
  it('Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#scrollUp > .fa').click({force:true});
    /* ==== End Cypress Studio ==== */
  })

  it.only('Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('section[style="height: auto !important;"]').click({force:true});
    /* ==== End Cypress Studio ==== */
  })
})