// jest.config.js
module.exports = {
    verbose: true,
    testMatch: [
        "**/__tests__/*.test.(ts|js)"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "*.js",
    ],
    coverageProvider: "v8"
};
