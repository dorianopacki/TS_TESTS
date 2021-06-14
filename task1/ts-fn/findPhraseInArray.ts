type arrayOfTuples = Array<[number, string]>;

export const findPhraseInArray = (
  array: string[],
  phrase: string
): Array<[number, string]> => {
  if (array.length < 1) alert("Given array seems to be empty");

  const copy = [...array];

  const result = copy.reduce(
    (acc: arrayOfTuples, val: string, index: number) => {
      if (val.toLocaleLowerCase().includes(phrase.toLocaleLowerCase())) {
        acc.push([index, val]);
      }
      return acc;
    },
    []
  );

  if (result.length < 1) {
    return [];
  } else {
    return result;
  }
};
