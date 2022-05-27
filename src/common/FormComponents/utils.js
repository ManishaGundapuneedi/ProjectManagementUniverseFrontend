export const defaultValues = fields =>
  fields.filter(field => field.defaultValue).reduce(
    (obj, field) => ({
      ...obj,
      [field.key]: field.defaultValue,
    }),
    {},
  );

export const validate = (fields, values) =>
  fields.reduce((obj, field) => {
    const { key, validators } = field;
    const value = values[key] || null;

    // no validators for field, skip
    if (!validators || !validators.length) {
      return obj;
    }

    const errors = validators
      .map(validator => validator(value, values))
      .filter(error => error);

    // no errors found for field, skip
    if (!errors.length) {
      return obj;
    }

    return {
      ...obj,
      [key]: errors,
    };
  }, {});
