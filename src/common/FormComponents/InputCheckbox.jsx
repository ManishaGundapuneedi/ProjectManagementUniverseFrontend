import PropTypes from 'prop-types';
import React, { Component } from 'react';

const defaultProps = {
  className: '',
  value: false,
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool,
};

class FieldInputCheckbox extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { checked } = e.currentTarget;
    const { field, onChange } = this.props;
    const { key } = field;

    onChange(key, checked);
  }

  render() {
    const { className, field, value } = this.props;
    const { key } = field;

    return (
      <input
        className={className}
        checked={value}
        id={key}
        onChange={this.onChange}
        type="checkbox"
      />
    );
  }
}

FieldInputCheckbox.defaultProps = defaultProps;
FieldInputCheckbox.propTypes = propTypes;

export default FieldInputCheckbox;
