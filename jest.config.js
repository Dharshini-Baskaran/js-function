module.exports = {
  verbose: true,
  testEnvironment: "node",
  detectOpenHandles: true,
  logHeapUsage: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ['func.js', 'func.test.js'],
};
