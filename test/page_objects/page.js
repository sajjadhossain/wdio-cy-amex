// A page interface
function Page () {}

Page.prototype.open = (path) => {
  // Open a URL passed
  browser.url(path)
  // Set window size
  browser.setViewportSize({
        width: 1000,
        height: 500
    })
  // Pause for async
  browser.pause(1000)
};

module.exports = new Page()
