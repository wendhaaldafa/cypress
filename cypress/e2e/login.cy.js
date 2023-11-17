describe('login user', () => {
  it('login user with correct email and pw', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear();
    cy.get('[data-qa="login-email"]').type('heran@gmail.com');
    cy.get('[data-qa="login-password"]').clear('h');
    cy.get('[data-qa="login-password"]').type('heranusa');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('login user with incorrect email and pw', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('wendha@gmail.com');
    cy.get('[data-qa="login-email"]').type('wendha@gmail.com');
    cy.get('[data-qa="login-password"]').clear('h');
    cy.get('[data-qa="login-password"]').type('heranusa');
    cy.get('[data-qa="login-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})