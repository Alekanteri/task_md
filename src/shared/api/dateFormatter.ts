const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "numeric",
  minute: "numeric",
});

export const formateDate = (date: number): string => {
  return dateFormatter.format(date);
};
