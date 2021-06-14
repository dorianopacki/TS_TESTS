//filter

type filterFnCallback = <T extends number | string>(
  currentValue: T,
  index: number,
  array: T[]
) => boolean;

export const filterFn = <T extends number | string>(
  array: T[],
  callback: filterFnCallback
) => {
  const copy = [...array];

  return copy.reduce((accumulator, currentValue, index, copy) => {
    const shouldBepushed = callback(currentValue, index, copy);
    if (shouldBepushed) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, [] as T[]);
};

//map

export const mapFn = <T, U>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => U
) => {
  const copy = [...array];

  return copy.reduce((accumulator, currentValue, index, copy) => {
    accumulator.push(callback(currentValue, index, copy));
    return accumulator;
  }, [] as U[]);
};

//every

type everyFnCallback<T> = (
  currentElement: T,
  index: number,
  array: T[]
) => boolean;

export function everyFnR<T>(array: T[], callback: everyFnCallback<T>): boolean {
  const result = [...array].reduce((accumulator, currElement, index, arr) => {
    if (!callback(currElement, index, arr)) {
      arr.splice(index);
      return false;
    }

    return true;
  }, false);

  return result;
}

//some

type someFnCallback<T> = (
  currentElement: T,
  index: number,
  array: T[]
) => boolean;

export function someFnR<T>(array: T[], callback: someFnCallback<T>): boolean {
  const result = [...array].reduce((accumulator, currElement, index, arr) => {
    if (callback(currElement, index, arr)) {
      arr.splice(index);
      return true;
    }

    return false;
  }, true);

  return result;
}
