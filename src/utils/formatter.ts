/* eslint-disable unicorn/prefer-string-slice */

// Parses an RFC 3339 compliant time-string into a Date.
// It does this by combining the current date with the time-string
// to create a new Date instance.
//
// Example:
// Suppose the current date is 2016-01-01, then
// parseTime('11:00:12Z') parses to a Date corresponding to
// 2016-01-01T11:00:12Z.
export const parseTime = (time: string): Date => {
  const currentDateString = new Date().toISOString();

  return new Date(currentDateString.substr(0, currentDateString.indexOf('T') + 1) + time);
};

// Serializes a Date into an RFC 3339 compliant time-string in the
// format hh:mm:ss.sssZ.
export const serializeTime = (date: Date): string => {
  const dateTimeString = date.toISOString();

  return dateTimeString.substr(dateTimeString.indexOf('T') + 1);
};

// Parses an RFC 3339 compliant date-string into a Date.
//
// Example:
// parseDate('2016-01-01') parses to a Date corresponding to
// 2016-01-01T00:00:00.000Z.
export const parseDate = (date: string): Date => {
  return new Date(date);
};

// Serializes a Date into a RFC 3339 compliant date-string
// in the format YYYY-MM-DD.
export const serializeDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Parses an RFC 3339 compliant date-time-string into a Date.
export const parseDateTime = (dateTime: string): Date => {
  return new Date(dateTime);
};

// Serializes a Date into an RFC 3339 compliant date-time-string
// in the format YYYY-MM-DDThh:mm:ss.sssZ.
export const serializeDateTime = (dateTime: Date): string => {
  return dateTime.toISOString();
};
