type settingsProps = {
  actualPageIndex: number;
  entriesOnPage: number;
};

function areSettingsValuesValid(object: settingsProps) {
  const values = Object.values(object);

  function isNaturalNumber(el) {
    return !isNaN(el) && Number.isFinite(el) && Number.isInteger(el);
  }
  return values.every(isNaturalNumber);
}

export const paginateArray = <T>(dataEntries: T[], settings: settingsProps) => {
  if (dataEntries.length < 1) return "Given array is empty";
  if (!areSettingsValuesValid(settings)) return "Settings values are not valid";

  const { entriesOnPage, actualPageIndex } = settings;

  if (dataEntries.length / entriesOnPage <= actualPageIndex)
    return "Number of pages is smaller than given page index";

  const index = entriesOnPage * (actualPageIndex - 1);
  const entriesOnSelectedPage = dataEntries.slice(index, index + entriesOnPage);

  return entriesOnSelectedPage;
};
