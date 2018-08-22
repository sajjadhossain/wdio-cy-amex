const Page = require('./page');

const homeElements = require('../fixtures/elements/home-page.json');
const wait = require('../fixtures/wait.json')

// Home Page class extending the Page interface
const HomePage = Object.create(Page, {
  // Page title
  pageTitle: {
    value: () => {
      return browser.getTitle();
    }
  },
  // Navigate to all Small Business Cards
  navigateToAllSmallBusinessCards: {
    value: () => {
      browser.pause(wait.default)
      browser.click(homeElements.root.navigation.links[1][1])
      browser.pause(wait.default)
      browser.click(homeElements.root.navigation.links[1][2][2].id)
      browser.pause(wait.default)

      return browser.getTitle()
    }
  }
});

module.exports = HomePage;
