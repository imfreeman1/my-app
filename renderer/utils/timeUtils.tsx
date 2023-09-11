import addZero from "./addZero";

const timeStringMaker = () => {
  const date = new Date();
  const timeString = `${addZero(date.getHours())}:${addZero(
    date.getMinutes()
  )}:${addZero(date.getSeconds())}`;

  return timeString;
};

export default timeStringMaker;
