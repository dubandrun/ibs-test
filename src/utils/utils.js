export const currentDate = new Date().toLocaleString("ru", {
  hour: "numeric",
  minute: "numeric",
  month: "long",
  day: "numeric",
  weekday: "short",
});

export const getFutureDate = (day) =>
  new Date(new Date().getTime() + day * 24 * 3600 * 1000).toLocaleString("ru", {
    weekday: "short",
    day: "numeric",
  });

export const getFiveDaysDates = () => {
  const fiveDaysDatesArr = [];
  for (let i = 1; i <= 5; i++) {
    fiveDaysDatesArr.push(getFutureDate(i));
  }
  return fiveDaysDatesArr;
};
