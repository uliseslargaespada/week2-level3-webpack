/**
 * Utility functions related to basic math operations.
 * These functions showcase modern JavaScript features
 * that Babel can transpile for older environments.
 */

/**
 * Adds two numbers.
 *
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Adds an arbitrary amount of numbers.
 *
 * @param {...number} values - Numbers to add.
 * @returns {number} Sum of all values.
 */
export function addMany(...values) {
  // Array = [1, 2, 3]
  return values.reduce((accumulator, current) => accumulator + current, 0);
}

/**
 * Safely divides two numbers.
 * Returns null if the divisor is 0 or undefined.
 *
 * @param {number} numerator - Numerator.
 * @param {number} denominator - Denominator.
 * @returns {number | null} Result of the division or null.
 */
export function safeDivide(numerator, denominator) {
  if (!denominator) {
    return null;
  }

  return numerator / denominator;
}

/**
 * Computes the factorial of a number (inefficient on purpose).
 *
 * @param {number} n - Positive integer.
 * @returns {number} Factorial of n.
 */
export function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1); // This is a recursive call 
}