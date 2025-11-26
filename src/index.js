/**
 * Webpack entry file for Day 1.
 * - Imports JS modules (components, utilities).
 * - Creates basic layout and appends it to the DOM.
 *
 * Note: We are not yet importing SCSS here.
 * The SCSS file will be wired on Day 2 when loaders are introduced.
 */
import createHeader from "./components/header";
import createFooter from "./components/footer";
import { add } from "./utils/math";
import { toKebabCase } from "./utils/strings.js";

// Import Styles
import "./styles.scss";

function main() {
  const root = document.getElementById("app-root");

  if (!root) {
    return;
  }

  // First, we need to call the individual functions that create our app components
  const appContainer = document.createElement("div");
  appContainer.className = "app-root";

  const header = createHeader();

  const resultParagraph = document.createElement("p");
  resultParagraph.textContent = `Example: add(2, 3) = ${add(2, 8)}`;

  const kebabParagraph = document.createElement("p");
  kebabParagraph.textContent = `Kebab case of "Webpack Bundler Demo" is: "${toKebabCase(
    "Webpack Bundler Demo"
  )}"`;

  const footer = createFooter();

  appContainer.appendChild(header);
  appContainer.appendChild(resultParagraph);
  appContainer.appendChild(kebabParagraph);
  appContainer.appendChild(footer);

  root.appendChild(appContainer);
}

// Execute main immediately
main();
