const isPositive = require('../func');

describe("isPositive function tests", () => {
  // Normal cases
  it("should return true for positive numbers", () => {
    expect(isPositive(10)).toBe(true);
    expect(isPositive(1)).toBe(true);
  });

  it("should return false for zero", () => {
    expect(isPositive(0)).toBe(false);
  });

  it("should return false for negative numbers", () => {
    expect(isPositive(-1)).toBe(false);
  });

  // Edge cases
  it("should return true for very large positive numbers", () => {
    expect(isPositive(Number.MAX_SAFE_INTEGER)).toBe(true); // Max safe integer
    expect(isPositive(Number.POSITIVE_INFINITY)).toBe(true); // Infinity
  });

  it("should return false for very large negative numbers", () => {
    expect(isPositive(-Number.MAX_SAFE_INTEGER)).toBe(false); // Large negative number
    expect(isPositive(Number.NEGATIVE_INFINITY)).toBe(false); // Negative Infinity
  });
});