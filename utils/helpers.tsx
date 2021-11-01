const pad = (num: number) => ('0' + num).slice(-2);

export const getDateFromTimeStamp = (timestamp: number) => {
  const date = new Date(timestamp);
  let days = date.getDate(),
    months = date.getMonth() + 1,
    years = date.getFullYear();
  return `${pad(months)}-${pad(days)}-${pad(years)}`;
};
