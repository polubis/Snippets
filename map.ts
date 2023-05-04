// Implementation
const map = <T, R>(
  array: T[],
  mapper: (item: T, idx: number, arr: T[]) => R
): R[] => {
  const result: R[] = [];
  const { length } = array;

  for (let i = 0; i < length; i++) {
    const item = array[i];
    result.push(mapper(item, i, array));
  }

  return result;
};

// Usage
map([1, 2, 3], (item, idx) => `I'm string now -> ${item}, idx: ${idx}`);
