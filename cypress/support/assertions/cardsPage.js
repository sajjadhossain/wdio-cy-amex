// Called after cy.openBusinessCardsPage()
// These commands make assertions against the cards page

// assert cards header and number of cards
Cypress.Commands.add('assertCardsPage', (cards) => {
  cy.contains(cards.main.id, cards.header.value).should('be.visible')
  cy.get(cards.cards.id).should('have.length', 12)
})
