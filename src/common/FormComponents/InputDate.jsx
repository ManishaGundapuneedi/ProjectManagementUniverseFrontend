import classNames from 'classnames';
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

class InputDate extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(dateCompKey, dateCompValue) {
    const { field, onChange, value } = this.props;
    const { key } = field;
    const formatedValue = value.split('T')[0].replace(/-/gi, '/');
    const dateValue = formatedValue.split('/');

    if (dateCompKey === `${key}-day`) {
      onChange(key, `${dateValue[0]}-${dateValue[1]}-${dateCompValue}`);
    }
    if (dateCompKey === `${key}-month`) {
      onChange(key, `${dateValue[0]}-${dateCompValue}-${dateValue[2]}`);
    }
    if (dateCompKey === `${key}-year`) {
      onChange(key, `${dateCompValue}-${dateValue[1]}-${dateValue[2]}`);
    }
  }

  render() {
    const { className, field, value } = this.props;
    const { key, placeholder } = field;
    const formatedValue = value.split('T')[0].replace(/-/gi, '/');
    let dateValue;
    if (value) {
      dateValue = formatedValue.split('/');
    } else {
      dateValue = placeholder ? new Date(placeholder) : new Date();
    }

    return (
      <div>
        <input
          className={classNames({
            input: true,
            'input-text': true,
            'manual-kyc-field__date-input': true,
            [className]: className,
          })}
          onChange={e => this.onChange(`${key}-day`, e.currentTarget.value)}
          type="number"
          min="1"
          max="31"
          step="1"
          value={dateValue[2]}
        />
        /
        <input
          className={classNames({
            input: true,
            'input-text': true,
            'manual-kyc-field__date-input': true,
            [className]: className,
          })}
          onChange={e => this.onChange(`${key}-month`, e.currentTarget.value)}
          type="number"
          min="1"
          max="12"
          step="1"
          value={dateValue[1]}
        />
        /
        <input
          className={classNames({
            input: true,
            'input-text': true,
            'manual-kyc-field__date-input': true,
            [className]: className,
          })}
          onChange={e => this.onChange(`${key}-year`, e.currentTarget.value)}
          type="number"
          maxLength="4"
          minLength="4"
          step="1"
          value={dateValue[0]}
        />
      </div>
    );
  }
}

InputDate.defaultProps = defaultProps;

InputDate.propTypes = propTypes;

export default InputDate;
