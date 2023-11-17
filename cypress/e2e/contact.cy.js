describe('contact', () => {
  it('contact us form', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear('heran');
    cy.get('[data-qa="name"]').type('heran');
    cy.get('[data-qa="email"]').clear('heran@gmail.com');
    cy.get('[data-qa="email"]').type('heran@gmail.com');
    cy.get('[data-qa="subject"]').clear('h');
    cy.get('[data-qa="subject"]').type('hallo');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('span').click();
    /* ==== End Cypress Studio ==== */
  })
})