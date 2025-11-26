/**
 * Creates a simple footer element to show at the bottom of the app.
 *
 * @returns {HTMLElement} The footer element to be appended to the page.
 */
function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "app-footer";

  const text = document.createElement("small");
  text.textContent = "Built for the Webpack & Babel week.";

  footer.appendChild(text);

  return footer;
}

export default createFooter;
 