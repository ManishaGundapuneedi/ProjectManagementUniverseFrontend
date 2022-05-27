import PropTypes from 'prop-types';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

class InputRadio extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    const { field, onChange } = this.props;
    const { key } = field;
    onChange(key, value);
  }

  render() {
    const { className, field, value } = this.props;
    const { key, options } = field;

    return (
      <div className={`input-radio ${className}`}>
        {options.map(option => (
          <label
            className="input-radio__option"
            key={option.value}
            htmlFor={`${key}-${option.value}`}
          >
            <input
              checked={value === option.value}
              className="input-radio__option__input"
              id={`${key}-${option.value}`}
              onChange={() => this.onChange(option.value)}
              type="radio"
              value={option.value}
            />
            <span className="input-radio__option__label">{option.label}</span>
          </label>
        ))}
      </div>
    );
  }
}

InputRadio.defaultProps = defaultProps;
InputRadio.propTypes = propTypes;

export default InputRadio;
