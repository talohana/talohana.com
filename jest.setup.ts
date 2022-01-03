// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Create mock for window.matchMedia

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Create mocks of localStorage getItem and setItem functions

let localStorageMock: { [key: string]: string } = {};

global.Storage.prototype.getItem = jest.fn(
  (key: string) => localStorageMock[key]
);
global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
  localStorageMock[key] = value;
});
