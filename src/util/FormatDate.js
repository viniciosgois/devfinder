export const FormatDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const month = months[date.getMonth()];
  return [date.getDate(), ' ', month.slice(0, 3).toLowerCase(), ' ', date.getFullYear()];
}
