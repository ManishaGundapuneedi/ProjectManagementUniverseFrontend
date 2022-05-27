import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
  autoComplete: true,
  autoFocus: false,
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

class InputText extends Component {
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
    const { className, field, value, autoComplete, autoFocus, onKeyDown } = this.props;
    const { key, placeholder, type } = field;

    return (
      <input
        className={classNames({
          input: true,
          'input-text': true,
          [className]: className,
        })}
        autoFocus={autoFocus}
        id={key}
        onChange={this.onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        type={type}
        value={value}
        {...(autoComplete ? {} : { autoComplete: 'off' })}
      />
    );
  }
}

InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;

export default InputText;
