const isPositiveNumber = require('js-function/func.js'); // Assuming the function is in isPositiveNumber.js

describe('isPositiveNumber', () => {
  it('should return true for positive numbers', () => {
    expect(isPositiveNumber(1)).toBe(true);
    expect(isPositiveNumber(10)).toBe(true);
    expect(isPositiveNumber(1000)).toBe(true);
    expect(isPositiveNumber(Number.MAX_SAFE_INTEGER)).toBe(true); // Large positive number
  });

  it('should return false for zero', () => {
    expect(isPositiveNumber(0)).toBe(false); 
  });

  it('should return false for negative numbers', () => {
    expect(isPositiveNumber(-1)).toBe(false);
    expect(isPositiveNumber(-10)).toBe(false);
    expect(isPositiveNumber(-1000)).toBe(false);
    expect(isPositiveNumber(Number.MIN_SAFE_INTEGER)).toBe(false); // Large negative number
  });



  it('should handle edge cases correctly', () => {
    expect(isPositiveNumber(0.1)).toBe(true);   // Small positive number
    expect(isPositiveNumber(Number.MIN_VALUE)).toBe(true);  // Smallest positive number
    // Infinity is considered positive
    expect(isPositiveNumber(Infinity)).toBe(true);


  });


  it('should handle invalid input gracefully', () => {
    expect(isPositiveNumber(NaN)).toBe(false);  // Not a Number
    expect(isPositiveNumber(undefined)).toBe(false);
    expect(isPositiveNumber(null)).toBe(false);
    expect(isPositiveNumber('1')).toBe(false); // String input (ensure no implicit type coercion) 
    expect(isPositiveNumber({})).toBe(false);  // Object input
    expect(isPositiveNumber([])).toBe(false);  // Array input

  });
});