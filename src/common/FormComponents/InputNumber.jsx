import classNames from 'classnames';
import PropTypes from 'prop-types';
// import BigNumber from 'bignumber.js';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
  value: '',
  decimalLimit: 8,
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  decimalLimit: PropTypes.number,
};

const validateDecimals = (value, limit) => {
  if (value === '') {
    return true;
  }
  // if (limit >= 0) {
  //   // const number = new BigNumber(value);
  //   // if (number.isEqualTo('0')) {
  //   //   return value.length <= limit + 2; // only allow up to limit zeroes
  //   // }
  //   return number.dp() <= limit;
  // }
  return Boolean(value);
};

class InputNumber extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { field, onChange, decimalLimit } = this.props;
    const { key } = field;
    if (validateDecimals(e.currentTarget.value, decimalLimit)) {
      onChange(key, e.currentTarget.value);
    }
  }

  render() {
    const { className, field, value } = this.props;
    const { key } = field;

    return (
      <input
        className={classNames({
          input: true,
          'input-text': true,
          [className]: className,
        })}
        id={key}
        onChange={this.onChange}
        type="number"
        min="0"
        step="0.1"
        value={value}
      />
    );
  }
}

InputNumber.defaultProps = defaultProps;
InputNumber.propTypes = propTypes;

export default InputNumber;
