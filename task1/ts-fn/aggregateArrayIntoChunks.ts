const MAX_VALUE = 7,
  MIN_VALUE = 4;

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min) + min);

const getLastElem = <T>(arr: Array<chunk<T>>) => {
  return arr[arr.length - 1];
};

type chunk<T> = T[];

export const aggregateArrayIntoChunks = <T>(
  array: Array<T>
): Array<chunk<T>> => {
  const output: Array<chunk<T>> = [];

  const givenArray = [...array];
  const result: Array<chunk<T>> = [];

  while (givenArray.length > 0) {
    result.push(givenArray.splice(0, randomNumber(MAX_VALUE, MIN_VALUE)));
  }

  const lastElem = getLastElem(result);
  const isLastElemLessThenMin = lastElem.length < MIN_VALUE;

  if (isLastElemLessThenMin) {
    return aggregateArrayIntoChunks(array);
  } else {
    output.push(...result);
    return output;
  }
};
