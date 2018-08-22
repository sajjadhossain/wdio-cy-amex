// This command visits base URL and validates it
const home = require('../../fixtures/home/elements.json')
const cards = require('../../fixtures/cards/elements.json')

Cypress.Commands.add('selectAllBusinessCardsFromNavigation', () => {
  cy.get(home.navigation.content.ul.li[1].id).click()
  cy.get(home.navigation.content.ul.li[1].li[2].id).click()
})

Cypress.Commands.add('openBusinessCardsPage', () => {
  cy.selectAllBusinessCardsFromNavigation()
  cy.assertCardsPage(cards)
})
