import {increment} from './App';

test('adds 1 + 2 to equal 3', () => {
  expect(increment(1, 2)).toBe(3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(increment(2, 2)).toBe(4);
});
