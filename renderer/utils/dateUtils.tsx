const makeDateString = () => {
  let date = new Date();
  const dateSentence = `${date.getFullYear()}-${addZero(
    date.getMonth() + 1
  )}-${addZero(date.getDate())}`;

  return dateSentence;
};

const addZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

export default makeDateString;

// time을 추가할지는 좀 더 고민해보고.
