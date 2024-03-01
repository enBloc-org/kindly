/**
 *
 * @param givenString expects a date format string or timestamptz value from supabase
 * @returns a formatted string displaying the hour and minute stamp passed i.e.: 13:32
 */
export const createTimeMarker = (givenString: string): string => {
  const givenDate: Date = new Date(givenString);

  const hoursValue =
    givenDate.getHours().toString().split('').length < 2
      ? '0' + givenDate.getHours().toString()
      : givenDate.getHours().toString();

  const minutesValue =
    givenDate.getMinutes().toString().split('').length < 2
      ? '0' + givenDate.getMinutes().toString()
      : givenDate.getMinutes().toString();

  return `${hoursValue}:${minutesValue}`;
};

/**
 *
 * @param givenString expects a date format string or timestamptz type from supabase
 * @returns a string formatted to match our date stamps (i.e.: 01 Januaray) or the string 'today' if the given date matches the current date
 */
export const createDateMarker = (givenString: string): string => {
  try {
    const givenDate: Date = new Date(givenString);
    const monthsArray = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const currentDate = new Date();
    return givenDate.getDate() === currentDate.getDate() &&
      givenDate.getUTCMonth() === currentDate.getUTCMonth() &&
      givenDate.getFullYear() === currentDate.getFullYear()
      ? 'today'
      : `${givenDate.getUTCDate()} ${monthsArray[givenDate.getMonth()]}`;
  } catch (error) {
    throw error;
  }
};
