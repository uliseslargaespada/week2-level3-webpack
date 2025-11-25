/**
 * Creates a simple header element for the app.
 *
 * @returns {HTMLElement} The header element to be appended to the page.
 */
function createHeader() {
  // Here's where the semantics come into place
  const header = document.createElement("header");
  header.className = "app-header";

  const title = document.createElement("h1");
  title.textContent = "Webpack Bundler Demo";

  const subtitle = document.createElement("p");
  subtitle.textContent =
    "This small app is bundled with Webpack and uses multiple modules.";

  const subtitle2 = document.createElement("p");
  subtitle2.textContent = "New Element created in development";

  header.appendChild(title);
  header.appendChild(subtitle);
  header.appendChild(subtitle2);

  return header;
}

export default createHeader;
