type avaiableTypes = string | number | Date;

const isValidNumber = (number: number) =>
  !isNaN(number) || Number.isInteger(number) || Number.isFinite(number);

export const getMyAge = (input: avaiableTypes) => {
  const currentYear = new Date().getFullYear();

  if (typeof input === "string") {
    if (!isValidNumber(parseInt(input)))
      return "Given string can't be transformed to number";
  }

  if (typeof input === "number") {
    if (!isValidNumber(input)) return "Given number is not valid";
  }

  if (input instanceof Date) {
    if (!isValidNumber(input.getTime())) return "Given date is not valid";
  }

  function formatDate(date: string | number | Date) {
    if (typeof date === "number") {
      return date;
    } else if (typeof date === "string") {
      return parseInt(date);
    } else if (date instanceof Date) {
      return date.getFullYear();
    }
    return process.exit(1);
  }

  const correctDate = formatDate(input);

  if (correctDate > currentYear || correctDate < 1900)
    return "Pass the date between 1900 and current year";

  function calculateAge() {
    const data = formatDate(input);
    return currentYear - data;
  }

  const age = calculateAge();
  return age;
};
