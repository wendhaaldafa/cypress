describe('Verify address details', () => {
  it('Verify address details in checkout page', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('b');
    cy.get('[data-qa="signup-name"]').type('bagas');
    cy.get('[data-qa="signup-email"]').clear('b');
    cy.get('[data-qa="signup-email"]').type('bagas@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('.clearfix > :nth-child(3)').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('1q2w3e4r');
    cy.get('[data-qa="days"]').select('19');
    cy.get('[data-qa="months"]').select('4');
    cy.get('[data-qa="years"]').select('2002');
    cy.get(':nth-child(7) > label').click();
    cy.get('#newsletter').check();
    cy.get(':nth-child(8) > label').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('b');
    cy.get('[data-qa="first_name"]').type('bag');
    cy.get('[data-qa="last_name"]').clear('ba');
    cy.get('[data-qa="last_name"]').type('bagas');
    cy.get('[data-qa="company"]').clear('j');
    cy.get('[data-qa="company"]').type('jombang');
    cy.get('[data-qa="address"]').clear('j');
    cy.get('[data-qa="address"]').type('jombangan, pare, kediri');
    cy.get('[data-qa="address2"]').clear('j');
    cy.get('[data-qa="address2"]').type('jombangan');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').clear('j');
    cy.get('[data-qa="state"]').type('jombangan');
    cy.get('[data-qa="city"]').clear('p');
    cy.get('[data-qa="city"]').type('lamong');
    cy.get('[data-qa="zipcode"]').clear('47');
    cy.get('[data-qa="zipcode"]').type('4778');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('09834665825');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get(':nth-child(17) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })
})