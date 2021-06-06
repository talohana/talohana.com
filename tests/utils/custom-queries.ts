import {
  buildQueries,
  GetAllBy,
  Matcher,
  MatcherOptions,
  queryHelpers,
} from '@testing-library/react';

const queryAllByName: GetAllBy<[Matcher, MatcherOptions?]> = (...args) =>
  queryHelpers.queryAllByAttribute('name', ...args);

const getMultipleError = (c: HTMLElement, name: string): string =>
  `Found multiple elements with the name attribute of: ${name}`;
const getMissingError = (c: HTMLElement, name: string): string =>
  `Unable to find an element with the name attribute of: ${name}`;

// prettier-ignore
const [
  queryByName,
  getAllByName,
  getByName,
  findAllByName,
  findByName,
] = buildQueries(queryAllByName, getMultipleError, getMissingError);

export { queryByName, getAllByName, getByName, findAllByName, findByName };
