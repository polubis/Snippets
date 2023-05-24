import { map } from './map';

describe(`I'm able to map any array when: `, () => {
  const items = [1, 2, 3];

  it('calls mapper function to guarantee custom mapping', () => {
    // Creating spy object and mocking implementation.
    // Thanks to this we'll be able to listen for calls in expect.
    const mapperSpy = jest.fn().mockImplementation((item) => 'Item: ' + item);

    // Calls function under test and passes spy object.
    const result = map(items, mapperSpy);

    // We're checking number of mapperSpy mocked implementation calls.
    expect(mapperSpy).toHaveBeenCalledTimes(items.length);
    // First iteration argument pass checked.
    expect(mapperSpy).toHaveBeenCalledWith(1, 0, items);
    // Second iteration argument pass checked.
    expect(mapperSpy).toHaveBeenCalledWith(2, 1, items);
    // Third iteration argument pass checked.
    expect(mapperSpy).toHaveBeenCalledWith(3, 2, items);
  });
});
