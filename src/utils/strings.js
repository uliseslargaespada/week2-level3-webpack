/**
 * String utility functions to demonstrate tree shaking.
 */

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} text - Input text.
 * @returns {string} Text with first letter capitalized.
 */
export function capitalize(text) {
  if (!text) {return "";}

  return text[0].toUpperCase() + text.slice(1);
}

/**
 * Reverses a string.
 *
 * @param {string} text - Input text.
 * @returns {string} Reversed text.
 */
export function reverse(text) {
  // 1. splits the text into multiple individual characters
  // 2. revers the position of each individual char
  // 3. join the chars without any spaces
  // Example
  // Hello 
  // 1. h e l l o
  // 2. o l l e h
  // 3. olleh
  return text.split("").reverse().join("");
}

/**
 * Converts a string to kebab-case.
 *
 * @param {string} text - Input text.
 * @returns {string} Kebab-cased text.
 */
export function toKebabCase(text) {
  return text
    .trim() // This removes all of the spaces ina string
    .toLowerCase() // transforms all capital characters into lower cases
    .split(/\s+/) // splits the words into tokens
    .join("-"); // joins the works with a hyphen 
}
