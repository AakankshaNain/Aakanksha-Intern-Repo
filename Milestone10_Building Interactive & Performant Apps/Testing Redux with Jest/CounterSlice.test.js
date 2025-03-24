import reducer, { increment } from '../redux/counterSlice';

describe('Counter reducer', () => {
  test('Checking if incrementing value correctly', () => {
    const previousState = { value: 0 };
    const nextState = reducer(previousState, increment());
    expect(nextState.value).toBe(1);
  });
});
