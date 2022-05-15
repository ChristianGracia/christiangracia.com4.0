const militaryTimeConverter = (date: Date) => {
  let hours = date.getHours();
  const AmOrPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  let minutes = date.getMinutes();
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  return hours + ":" + formattedMinutes + " " + AmOrPm;
};
const formatDateAndTime = (date: string) => {
  let formattedDate = new Date(date);
  return (
    militaryTimeConverter(formattedDate) +
    " " +
    formattedDate.toLocaleDateString("en-US")
  );
};

const formatHHMMString = (timestamp: number) => {
  return new Date(timestamp * 1000).toTimeString().split(" ")[0].substring(3);
};

export { militaryTimeConverter, formatDateAndTime, formatHHMMString };
