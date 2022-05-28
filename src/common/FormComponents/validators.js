import * as errors from './errors';
import { getDateDiff, isValidDate } from './dateTimeUtils';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4,6}$/im;
const PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^!*&]*)(?=\S+$).{8,}$/;
const PHONE_OR_EMAIL_REGEX = new RegExp(
  `${EMAIL_REGEX.source}|${PHONE_REGEX.source}`,
);

const testRegex = (re, s) => re.test(s);

export const email = value =>
  testRegex(EMAIL_REGEX, value) ? null : errors.EMAIL;

export const minAge18 = value => {
  const isValid = isValidDate(value);
  if (!isValid) {
    return errors.DOB;
  }
  const age = getDateDiff(new Date(), value, 'years');
  return age >= 18 ? null : errors.MIN_AGE;
};

export const nonEmpty = value => {
  if (value === null || value === undefined) {
    return errors.NON_EMPTY;
  }

  if (typeof value === 'string' && value.trim() === '') {
    return errors.NON_EMPTY;
  }

  return null;
};

export const passwordConfirm = (value, values) =>
  value === values.newPassword ? null : errors.PASSWORD_CONFIRM;

export const passwordChange = (value, values) =>
  value !== values.currentPassword ? null : errors.PASSWORD_SAME_AS_CURRENT;

export const password = value =>
  testRegex(PASSWORD_REGEX, value) ? null : errors.PASSWORD;

export const phone = value =>
  testRegex(PHONE_REGEX, value) ? null : errors.PHONE;

export const phoneOrEmail = value =>
  testRegex(PHONE_OR_EMAIL_REGEX, value) ? null : errors.PHONE_OR_EMAIL;

export const phoneShouldStartWithCountryCode = (value, values) =>
  testRegex(/^[0-9()]+$/, value)
    ? `${
        errors.PHONE_SHOULD_START_WITH_COUNTRY_CODE
      } (eg. +${values.countryCode || '1'})`
    : null;

export const exceedBalance = externalValue => value =>
  value > externalValue ? errors.EXCEED_BALANCE : null;