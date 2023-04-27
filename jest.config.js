/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: [
    "<rootDir>/test"
  ],
  transform: {
    ".+\\.ts$": "ts-jest"
  },
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts"
  ],
  coverageDirectory: "coverage"
};
