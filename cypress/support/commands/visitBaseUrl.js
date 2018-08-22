// This command visits base URL and validates it
const home = require('../../fixtures/home/elements.json')

Cypress.Commands.add('visitBaseUrl', () => {
  cy.visit('')
  cy.assertBaseUrl(home)
})
