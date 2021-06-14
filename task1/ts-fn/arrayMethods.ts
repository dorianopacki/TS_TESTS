// forEach

type callbackForEach<T> = (element: T, index: number, array: Array<T>) => void;

export const forEachFn = <T>(
  array: T[],
  callback: callbackForEach<T>
): void => {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    callback(copy[i], i, copy);
  }
};

// map

type callbackMap<T, U> = (element: T, index: number, array: T[]) => U;

export const mapFn = <T, U>(array: T[], callback: callbackMap<T, U>): U[] => {
  // immutability
  const copy = [...array];
  const output: U[] = [];
  for (let i = 0; i < copy.length; i++) {
    output.push(callback(copy[i], i, copy));
  }
  return output;
};

// entries

export const entriesFn = function* <T>(array: T[]) {
  if (!array.length) return "array is empty";
  const arr: T[] = [];
  for (let i = 0; i < array.length; i++) {
    let elements = array[i];
    arr.push(yield elements);
  }
  return arr;
};

// filter

type callbackFilterFn = <T>(element: T, index: number, array: T[]) => boolean;

export const filterFn = <T>(array: T[], callback: callbackFilterFn) => {
  const output = [];
  const copy = [...array];
  for (let i = 0; i < copy.length; i++) {
    if (!callback(copy[i], i, copy)) {
      continue;
    }
    output.push(copy[i]);
  }
  return output;
};

// reduce
type callbackReduceFn = <T, U>(
  previousValue: T,
  currentValue: U,
  index: number,
  array: T[]
) => T | U;

export const reduceFn = <T, U>(
  array: T[],
  callback: callbackReduceFn,
  initial: U
) => {
  let accumulator = initial ? initial : array[0];
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
};

// every

type callbackEveryFn = <T>(
  currentValue: T,
  index: number,
  array: T[]
) => boolean;

export const everyFn = <T extends string | number>(
  array: T[],
  callback: callbackEveryFn
) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) return false;
  }
  return true;
};

// some

type callbackSomeFn = <T extends number | string>(
  element: T,
  index: number,
  array: T[]
) => boolean;

export const someFn = <T extends number | string>(
  array: T[],
  callback: callbackSomeFn
): boolean => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};
