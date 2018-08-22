const Page = require('./page');

const cardsElements = require('../fixtures/elements/cards-page.json');
const wait = require('../fixtures/wait.json')

// Card Page class extending the Page interface
const CardsPage = Object.create(Page, {
  // Assert all Welcome Offers
  welcomeOffersDisplayed: {
    value: () => {
      browser.pause(wait.default)
      const totalWelcomeOffers = browser.elements(cardsElements.root.cards.welcomeOffers.id)

      return totalWelcomeOffers.value
    }
  },
  // Assert all Small Business Cards
  cardsDisplayed: {
    value: () => {
      browser.pause(wait.default)
      const totalCards = browser.elements(cardsElements.root.cards.rows.id)

      return totalCards.value
    }
  }
});

module.exports = CardsPage;
