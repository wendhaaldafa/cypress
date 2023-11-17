describe('Download Invoice', () => {
  it('Download Invoice after purchase order', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(24) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('h');
    cy.get('[data-qa="signup-name"]').type('haped');
    cy.get('[data-qa="signup-email"]').clear('h');
    cy.get('[data-qa="signup-email"]').type('haped@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('1q2w3e4r');
    cy.get('[data-qa="days"]').select('16');
    cy.get('[data-qa="months"]').select('5');
    cy.get('[data-qa="years"]').select('2002');
    cy.get(':nth-child(7) > label').click();
    cy.get('#newsletter').check();
    cy.get(':nth-child(8) > label').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('h');
    cy.get('[data-qa="first_name"]').type('ha');
    cy.get('[data-qa="last_name"]').clear('h');
    cy.get('[data-qa="last_name"]').type('haped');
    cy.get('[data-qa="company"]').clear('p');
    cy.get('[data-qa="company"]').type('pelem');
    cy.get('[data-qa="address"]').clear('p');
    cy.get('[data-qa="address"]').type('pelem, pare, kediri');
    cy.get('[data-qa="address2"]').clear('p');
    cy.get('[data-qa="address2"]').type('pelem');
    cy.get('[data-qa="state"]').clear('p');
    cy.get('[data-qa="state"]').type('pelem');
    cy.get('[data-qa="city"]').clear('j');
    cy.get('[data-qa="city"]').type('jakarta');
    cy.get('[data-qa="zipcode"]').clear('89');
    cy.get('[data-qa="zipcode"]').type('897567');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('09783547');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('h');
    cy.get('[data-qa="name-on-card"]').type('haped');
    cy.get('[data-qa="card-number"]').clear('8');
    cy.get('[data-qa="card-number"]').type('8465');
    cy.get('[data-qa="cvc"]').clear('7');
    cy.get('[data-qa="cvc"]').type('789');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('05');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2028');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('.col-sm-9 > .btn-default').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})