import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import InputCheckbox from './InputCheckbox';

const defaultProps = {
  className: '',
  falseLabel: '',
  trueLabel: '',
  value: false,
};

const propTypes = {
  className: PropTypes.string,
  falseLabel: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  trueLabel: PropTypes.string,
  value: PropTypes.bool,
};

const FieldSwitch = ({
  className,
  falseLabel,
  field,
  onChange,
  trueLabel,
  value,
}) => {
  const { key } = field;

  return (
    <div className={`field-switch field-switch--${value} ${className}`}>
      <div
        className={classNames({
          'field-switch__label': true,
          'field-switch__label--active': !value,
        })}
      >
        {falseLabel}
      </div>
      <label className="field-switch__button" htmlFor={key}>
        <InputCheckbox
          className="field-switch__button__field"
          field={field}
          onChange={onChange}
          value={value}
        />
      </label>
      <div
        className={classNames({
          'field-switch__label': true,
          'field-switch__label--active': value,
        })}
      >
        {trueLabel}
      </div>
    </div>
  );
};

FieldSwitch.defaultProps = defaultProps;
FieldSwitch.propTypes = propTypes;

export default FieldSwitch;
