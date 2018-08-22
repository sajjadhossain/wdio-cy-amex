// Called after cy.visitBaseUrl()
// These commands make assertions against the baseUrl

// assert main contains a visible navigation
Cypress.Commands.add('assertBaseUrl', (home) => {
  for(let i = 0; i < home.navigation.content.ul.total; i += 1) {
    cy.contains(home.main.id, home.navigation.content.ul.li[i].value).should('be.visible')
  }
})
