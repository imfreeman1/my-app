import addZero from "./addZero";

const dateStringMaker = () => {
  let date = new Date();
  const dateSentence = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;

  return dateSentence;
};

export default dateStringMaker;
