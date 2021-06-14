type avaiblePhase = string | number;

export function filterWith<T>(arrOfSomething: T[], phrase: avaiblePhase): T[] {
  if (phrase.toString().length < 2) {
    return [];
  }

  const toSearch = new RegExp(phrase.toString(), "gi");

  return arrOfSomething.filter((element) => {
    if (typeof element === "string" || typeof element === "number") {
      return element.toString().match(toSearch);
    }

    if (Array.isArray(element)) {
      return filterWith(element, phrase).length > 0;
    }

    if (Object.prototype.toString.call(element) === "[object Object]") {
      const arrayOfValues = Object.values(element);
      return filterWith(arrayOfValues, phrase).length > 0;
    }

    return false;
  });
}
