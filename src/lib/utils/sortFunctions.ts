// sort by date
export const sortByDate = (array: any[]) => {
  const sortedArray = array.sort(
    (a: any, b: any) =>
      new Date(b.data.modDatetime && b.data.modDatetime) -
      new Date(a.data.modDatetime && a.data.modDatetime)
  );
  return sortedArray;
};
