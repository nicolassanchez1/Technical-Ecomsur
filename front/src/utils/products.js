export const getCheckboxItems = (array, key) => {
  return Array.from(new Set(array.map((product) => product[key])));
};

export const sortArray = (array, key) => array.sort((a, b) => b[key] - a[key]);
