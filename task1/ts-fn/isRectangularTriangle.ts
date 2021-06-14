const canBuildATriangle = ([a, b, c]: number[]) => c < a + b;

const isValidNumber = (number: number) =>
  !isNaN(number) && Number.isInteger(number) && Number.isFinite(number);

const isValidArgument = (...args: number[]) => {
  return args.every((argument) => isValidNumber(argument));
};
export const isRectangularTriangle = (x1: number, x2: number, x3: number) => {
  if (!isValidArgument(x1, x2, x3)) return "Arguments are not valid";
  if (x1 < 0 || x2 < 0 || x3 < 0)
    return "Side length has to be a natural number";

  const [a, b, c] = [x1, x2, x3].sort((a, b) => a - b);

  if (!canBuildATriangle([a, b, c]))
    return "The biggest side has to be smaller than sum of two others to create a triangle";

  function rectangularTriangleBuilder([x1, x2, x3]: number[]) {
    return Math.pow(x1, 2) + Math.pow(x2, 2) === Math.pow(x3, 2)
      ? "It is possible to build rectangular triangle with those sides"
      : "It is not possible to build rectangular triangle with those sides";
  }

  const canBuildRectangularTriangle = rectangularTriangleBuilder([a, b, c]);
  return canBuildRectangularTriangle;
};
