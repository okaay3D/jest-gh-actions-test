const { when } = require('jest-when');
const greeter = require('./greeter');

test('greet John', () => {
  jest.useFakeTimers().setSystemTime(new Date('2022-04-15'));
  expect(greeter.greet('John')).toBe('Hello John, today is 15.4.2022');
});

test('mock function', () => {
  greeter.mockMeFn = jest.fn();
  when(greeter.mockMeFn).calledWith(1).mockReturnValue(2);

  expect(greeter.mockMeFn(1)).toBe(2);
});
