describe('Register', () => {
  it('Register', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('w');
    cy.get('[data-qa="signup-name"]').type('wenda');
    cy.get('[data-qa="signup-email"]').clear('w');
    cy.get('[data-qa="signup-email"]').type('wen@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender2').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('18');
    cy.get('[data-qa="months"]').select('12');
    cy.get('[data-qa="years"]').select('2010');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('W');
    cy.get('[data-qa="first_name"]').type('Wenda');
    cy.get('[data-qa="last_name"]').clear('D');
    cy.get('[data-qa="last_name"]').type('Dapa');
    cy.get('[data-qa="company"]').clear('A');
    cy.get('[data-qa="company"]').type('ASD');
    cy.get('[data-qa="address"]').clear('pare');
    cy.get('[data-qa="address"]').type('Paree, Kediri, Indo');
    cy.get('[data-qa="address2"]').clear('T');
    cy.get('[data-qa="address2"]').type('Tokyo');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('T');
    cy.get('[data-qa="state"]').type('Tokyo');
    cy.get('form > :nth-child(18)').click();
    cy.get('[data-qa="city"]').clear('T');
    cy.get('[data-qa="city"]').type('Tokyo');
    cy.get('[data-qa="zipcode"]').clear('2');
    cy.get('[data-qa="zipcode"]').type('20222');
    cy.get('[data-qa="mobile_number"]').clear('2');
    cy.get('[data-qa="mobile_number"]').type('2345678');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
  it('Register exiting email', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('p');
    cy.get('[data-qa="signup-name"]').type('putra');
    cy.get('[data-qa="signup-email"]').clear('p');
    cy.get('[data-qa="signup-email"]').type('ptr@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})