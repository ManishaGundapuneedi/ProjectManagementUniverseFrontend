import moment from 'moment';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const getDateFormatted = (date, format = DATE_FORMAT) =>
  moment(date).format(format);

export const getDateDiff = (from, to, unit = 'days') => {
  const fromDate = from ? moment(from) : moment();
  const toDate = to ? moment(to, DATE_FORMAT) : moment();
  return fromDate.diff(toDate, unit);
};

export const isValidDate = date => moment(date, DATE_FORMAT).isValid();
