const timeSplit = (yearString: string): string => {
  const [hours, minutes] = yearString.split(':');
  const monthAndDay = `${hours}:${minutes}`;

  return monthAndDay;
};

export default timeSplit;
