export const filterTableForCaseSensitive = (
  filter: any,
  row: any,
  column: any
) => {
  const id = filter.pivotId || filter.id;
  return row[id] !== undefined
    ? String(row[id])
        .toLowerCase()
        .includes(filter.value.toLowerCase())
    : true;
};
