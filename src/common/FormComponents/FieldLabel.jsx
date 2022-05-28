import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const defaultProps = {
  className: '',
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
};

const FieldLabel = ({ className, field }) => {
  const { label, key } = field;
  return (
    <label
      className={classNames({
        'filed-label': true,
        [`filed-label--${key}`]: key,
        [className]: className,
      })}
      htmlFor={key}
    >
      {label ? <div className="label"> {label}</div> : null}
    </label>
  );
};

FieldLabel.defaultProps = defaultProps;
FieldLabel.propTypes = propTypes;

export default FieldLabel;
