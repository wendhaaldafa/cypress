describe('Place Order', () => {
  it('Register while Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').clear('h');
    cy.get('[data-qa="signup-name"]').type('heranusa');
    cy.get('[data-qa="signup-email"]').clear('h');
    cy.get('[data-qa="signup-email"]').type('hrn@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').clear('1');
    cy.get('[data-qa="password"]').type('1q2w3e4r');
    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('1');
    cy.get('[data-qa="years"]').select('2001');
    cy.get('#newsletter').check();
    cy.get('form > :nth-child(8)').click();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').clear('h');
    cy.get('[data-qa="first_name"]').type('heran');
    cy.get('[data-qa="last_name"]').clear('h');
    cy.get('[data-qa="last_name"]').type('nusaa');
    cy.get('[data-qa="company"]').clear('h');
    cy.get('[data-qa="company"]').type('hij');
    cy.get('[data-qa="address"]').clear('P');
    cy.get('[data-qa="address"]').type('Puncu, Kediri, Indonesia');
    cy.get('[data-qa="address2"]').clear('P');
    cy.get('[data-qa="address2"]').type('Puncu');
    cy.get('[data-qa="state"]').clear('J');
    cy.get('[data-qa="state"]').type('Jombang');
    cy.get('[data-qa="city"]').clear('J');
    cy.get('[data-qa="city"]').type('Jombangan');
    cy.get('[data-qa="zipcode"]').clear('2');
    cy.get('[data-qa="zipcode"]').type('20345');
    cy.get('[data-qa="mobile_number"]').clear('0');
    cy.get('[data-qa="mobile_number"]').type('0976349762356');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('h');
    cy.get('[data-qa="name-on-card"]').type('heranusa');
    cy.get('[data-qa="card-number"]').clear('0');
    cy.get('[data-qa="card-number"]').type('031201');
    cy.get('[data-qa="cvc"]').clear('1');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').clear('12');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2026');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })

  it('Register before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')

    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').clear();
    cy.get('[data-qa="login-email"]').type('heran@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('1q2w3e4r');
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-password"]').clear('1q2w3e4');
    cy.get('[data-qa="login-password"]').type('heranusa');
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').clear('hrn@gmail.com');
    cy.get('[data-qa="login-email"]').type('hrn@gmail.com');
    cy.get('[data-qa="login-password"]').click();
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('1q2w3e4r');
    cy.get('[data-qa="login-button"]').click();
    cy.get('#form').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').clear('hrn@gmail.com');
    cy.get('[data-qa="login-email"]').clear('ptr@gmail.com');
    cy.get('[data-qa="login-email"]').type('ptr@gmail.com');
    cy.get('[data-qa="login-password"]').click();
    cy.get('[data-qa="login-password"]').clear('h');
    cy.get('[data-qa="login-password"]').type('heranusa');
    cy.get('[data-qa="login-button"]').click();
    cy.get('[data-qa="login-email"]').clear('h');
    cy.get('[data-qa="login-email"]').type('heran@gmail.com');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(7) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('h');
    cy.get('[data-qa="name-on-card"]').type('heran');
    cy.get('[data-qa="card-number"]').clear('9');
    cy.get('[data-qa="card-number"]').type('909089');
    cy.get('[data-qa="cvc"]').clear('8');
    cy.get('[data-qa="cvc"]').type('890');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('09');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2028');
    cy.get('[data-qa="pay-button"]').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
    /* ==== End Cypress Studio ==== */
  })

  it.only('Login Before Checkout', () => {
    cy.visit('https://www.automationexercise.com/')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').click();
    cy.get('[data-qa="login-email"]').clear('ad');
    cy.get('[data-qa="login-email"]').type('adi@gmail.com');
    cy.get('[data-qa="login-password"]').clear('1');
    cy.get('[data-qa="login-password"]').type('1q2w3e4r');
    cy.get('[data-qa="login-button"]').click();
    cy.get('body > :nth-child(3)').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').clear('r');
    cy.get('[data-qa="name-on-card"]').type('reza');
    cy.get('[data-qa="card-number"]').clear('35');
    cy.get('[data-qa="card-number"]').type('35758');
    cy.get('[data-qa="cvc"]').clear('3');
    cy.get('[data-qa="cvc"]').type('321');
    cy.get('[data-qa="expiry-month"]').clear('0');
    cy.get('[data-qa="expiry-month"]').type('08');
    cy.get('[data-qa="expiry-year"]').clear('2');
    cy.get('[data-qa="expiry-year"]').type('2028');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    /* ==== End Cypress Studio ==== */
  })
})