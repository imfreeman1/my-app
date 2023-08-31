const dateSplit = (yearString: string): string => {
  const [year, month, day] = yearString.split("-");
  const monthAndDay = `${month}-${day}`;

  return monthAndDay;
};

export default dateSplit;
