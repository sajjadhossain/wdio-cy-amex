before(() => {
  cy.hardReset()
})

describe('American Express', () => {
  it('visits the home page', () => {
    cy.visitBaseUrl('')
  })
  it('navigates to all business cards', () => {
    cy.openBusinessCardsPage()
  })
})
