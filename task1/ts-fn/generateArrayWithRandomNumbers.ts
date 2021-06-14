type generateArrayWithRandomNumbersProps = (
  howManyNumbers: number,
  min: number,
  max: number
) => number[];

type generateArrayOfArraysProps = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number
) => number[][];

const randomNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const isValidNumber = (...args: number[]) =>
  args.every(
    (argument) =>
      Number.isInteger(argument) &&
      !isNaN(argument) &&
      Number.isFinite(argument) &&
      argument > 0
  );

export const generateArrayWithRandomNumbers: generateArrayWithRandomNumbersProps = (
  howManyNumbers,
  min,
  max
) => {
  const output: number[] = [];

  if (!isValidNumber(howManyNumbers, min, max))
    throw Error("Given value has to be a positive integer");
  if (min > max) throw Error("Minimum value can't be bigger than maximum");
  if (min > 10 || max > 10)
    throw Error("The minimum and maximum value must be from range 1 - 10");

  for (let i = 0; i < howManyNumbers; i++) {
    output.push(randomNumber(min, max));
  }

  return output;
};

export const generateArrayOfArrays: generateArrayOfArraysProps = (
  howManyArrays,
  howManyNumbers,
  min,
  max
) => {
  if (!isValidNumber(howManyNumbers, howManyArrays, min, max))
    throw Error("Given value has to be an integer");
  if (min > max) throw Error("Minimum value can't be bigger than maximum");
  if (min > 10 || max > 10)
    throw Error("The minimum and maximum value must be from range 1 - 10");

  const output: number[][] = [];
  for (let i = 0; i < howManyArrays; i++) {
    output.push(generateArrayWithRandomNumbers(howManyNumbers, min, max));
  }

  return output;
};
