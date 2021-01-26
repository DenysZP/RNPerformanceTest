import { path } from 'ramda';
import { createSelector } from 'reselect';

export const fooSelector = path(['baz', 'foo']);

export const barSelector = path(['baz', 'bar']);

export const bazSelector = (state) => state.baz;

export const fooReSelector = createSelector(
  bazSelector,
  (baz) => baz.foo,
);

export const barReSelector = createSelector(
  bazSelector,
  (baz) => baz.bar,
);
