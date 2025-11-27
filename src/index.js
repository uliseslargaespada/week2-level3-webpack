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
import { add, safeDivide, addMany } from "./utils/math";
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

  // Example: using addMany with rest parameters and reduce
  const sumExample = addMany(1, 2, 3, 4, 5);

  // Example: optional chaining and nullish coalescing
  const config = {
    title: "Webpack Bundler Demo",
    theme: {
      accentColor: "#38bdf8"
    }
  };

  const accentColor = config.theme?.accentColor ?? "#f97316";

  const summaryParagraph = document.createElement("p");
  summaryParagraph.textContent = `addMany(1, 2, 3, 4, 5) = ${sumExample}. Accent color is ${accentColor}.`;

  const divideResult = safeDivide(10, 0);
  const divideParagraph = document.createElement("p");
  divideParagraph.textContent = `safeDivide(10, 0) => ${
    divideResult ?? "null (cannot divide by zero)"
  }`;

  const kebabParagraph = document.createElement("p");
  kebabParagraph.textContent = `Kebab case of "Webpack Bundler Demo" is: "${toKebabCase(
    "Webpack Bundler Demo"
  )}"`;

  const footer = createFooter();

  appContainer.appendChild(header);
  appContainer.appendChild(summaryParagraph);
  appContainer.appendChild(divideParagraph);
  appContainer.appendChild(resultParagraph);
  appContainer.appendChild(kebabParagraph);
  appContainer.appendChild(footer);

  root.appendChild(appContainer);
}

// Execute main immediately
main();
