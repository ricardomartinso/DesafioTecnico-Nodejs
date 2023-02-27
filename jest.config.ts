/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  resolver: "ts-jest-resolver",
  roots: ["<rootDir>"],
  bail: true,
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
};
