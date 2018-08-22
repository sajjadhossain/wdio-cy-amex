const expect = require('chai').expect;

const homePage = require('../page_objects/home.page.js')
const cardsPage = require('../page_objects/cards.page.js')

const homeValues = require('../fixtures/values/home-page.json')
const homeElements = require('../fixtures/elements/home-page.json')

const cardsValues = require('../fixtures/values/cards-page.json')
const cardsElements = require('../fixtures/elements/cards-page.json')

describe('American Express', () => {
  it('visits homepage', () => {
    homePage.open('/')
    expect(homePage.pageTitle()).to.equals(homeValues.root.title)
  })
  it('navigates to cards page', () => {
    expect(homePage.navigateToAllSmallBusinessCards()).to.equals(cardsValues.root.pageTitle)
  })
  it('displays all business welcome offers on the page', () => {
    expect(cardsPage.welcomeOffersDisplayed().length).to.equals(cardsElements.root.cards.welcomeOffers.total)
  })
  it('displays all business cards on the page', () => {
    expect(cardsPage.cardsDisplayed().length).to.equals(cardsElements.root.cards.total)
  })
})
