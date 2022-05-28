import PropTypes from 'prop-types';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
  value: '',
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
};

class InputSelect extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { field, onChange } = this.props;
    const { key } = field;
    onChange(key, e.currentTarget.value);
  }

  render() {
    const { className, field, value } = this.props;
    const { options, placeholder } = field;

    return (
      <select className={className} onChange={this.onChange} value={value}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
}

InputSelect.defaultProps = defaultProps;
InputSelect.propTypes = propTypes;

export default InputSelect;
