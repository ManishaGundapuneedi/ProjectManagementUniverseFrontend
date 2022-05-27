import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  className: '',
  errors: [],
};

const propTypes = {
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
};

const FieldErrors = ({ className, errors }) =>
  errors.length ? (
    <div
      className={classNames({
        field__errors: true,
        [className]: className,
      })}
    >
      {errors.map(error => (
        <div className="field__errors__message" key={error}>
          {error}
        </div>
      ))}
    </div>
  ) : null;

FieldErrors.defaultProps = defaultProps;
FieldErrors.propTypes = propTypes;

export default FieldErrors;
