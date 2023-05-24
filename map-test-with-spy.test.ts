import { map } from './map';

describe(`I'm able to map any array when: `, () => {
  const items = [1, 2, 3];

  it('calls mapper function to guarantee custom mapping', () => {
    // We'll create a spy object and mock implementation.
    // Thanks to this we'll be able to listen for function calls in expects.
    const mapperSpy = jest.fn().mockImplementation((item) => 'Item: ' + item);

    map(items, mapperSpy); // We calling function under test.

    // We'll check number of mapperSpy calls.
    expect(mapperSpy).toHaveBeenCalledTimes(items.length);
    // We'll check arguments passed in first iteration.
    expect(mapperSpy).toHaveBeenCalledWith(1, 0, items);
    // We'll check arguments passed in second iteration.
    expect(mapperSpy).toHaveBeenCalledWith(2, 1, items);
    // We'll check arguments passed in third iteration.
    expect(mapperSpy).toHaveBeenCalledWith(3, 2, items);
  });
});
