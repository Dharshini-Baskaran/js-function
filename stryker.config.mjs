// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  mutate: ["func.js"],

  // Optional but recommended for debugging and clarity:
  mutator: {
    excludedMutations: []  // Ensures no mutation type is skipped
  },

  thresholds: {
    high: 80,
    low: 60,
    break: 50
  },

  // Increase timeout if needed (Jest sometimes needs more time)
  timeoutMS: 5000
};
