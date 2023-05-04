describe(`I'm able to map any array when: `, () => {
  const items = [1, 2, 3];

  it('callback function transforms every item', () => {
    const result = map(items, (item) => 'Item: ' + item);

    expect(result).toEqual(['Item: 1', 'Item: 2', 'Item: 3']);
  });

  it('current item, index and array are passed to callback', () => {
    const result = map(
      items,
      (item, idx, arr) =>
        `Item: ${item}, index: ${idx}, array length: ${arr.length}`
    );

    expect(result).toEqual([
      'Item: 1, index: 0, array length: 3',
      'Item: 2, index: 1, array length: 3',
      'Item: 3, index: 2, array length: 3',
    ]);
  });

  it('created array have totally new reference', () => {
    const result = map(items, (item) => item);

    expect(result !== items).toBeTruthy();
  });
});
