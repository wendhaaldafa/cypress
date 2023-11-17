describe('Search Products and Verify Cart', () => {
  it('Search Products and Verify Cart After Login', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#slider').click();
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('j');
    cy.get('#search_product').type('jeans');
    cy.get('#submit_search').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear('a');
    cy.get('[data-qa="login-email"]').type('adi@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('1q2w3e4r');
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"]').clear('h');
    cy.get('[data-qa="login-email"]').type('heran@gmail.com');
    cy.get('[data-qa="login-password"]').click();
    cy.get('[data-qa="login-password"]').clear('h');
    cy.get('[data-qa="login-password"]').type('heranusa');
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="signup-name"]').clear('p');
    cy.get('[data-qa="signup-name"]').type('pikri');
    cy.get('[data-qa="signup-email"]').clear('p');
    cy.get('[data-qa="signup-email"]').type('pikri@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('1q2w3e4r');
    cy.get('[data-qa="days"]').select('16');
    cy.get('[data-qa="months"]').select('2');
    cy.get('[data-qa="years"]').select('2004');
    cy.get(':nth-child(7) > label').click();
    cy.get('#newsletter').check();
    cy.get(':nth-child(8) > label').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('p');
    cy.get('[data-qa="first_name"]').type('pik');
    cy.get('[data-qa="last_name"]').clear('p');
    cy.get('[data-qa="last_name"]').type('pikri');
    cy.get('[data-qa="company"]').clear('l');
    cy.get('[data-qa="company"]').type('lele');
    cy.get('[data-qa="address"]').clear('k');
    cy.get('[data-qa="address"]').type('kauman, pare, kediri');
    cy.get('[data-qa="address2"]').clear('k');
    cy.get('[data-qa="address2"]').type('kauman');
    cy.get('[data-qa="state"]').clear('k');
    cy.get('[data-qa="state"]').type('kauman');
    cy.get('.login-form > form').click();
    cy.get('[data-qa="city"]').clear('p');
    cy.get('[data-qa="city"]').type('pare');
    cy.get('[data-qa="zipcode"]').clear('457');
    cy.get('[data-qa="zipcode"]').type('4578');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('098346863');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})