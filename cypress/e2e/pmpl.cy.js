describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://garrr.xyz')
    cy.get(':nth-child(1) > :nth-child(1) > .card > .row > .col-md-8 > .card-body > .btn').click()
  })
})