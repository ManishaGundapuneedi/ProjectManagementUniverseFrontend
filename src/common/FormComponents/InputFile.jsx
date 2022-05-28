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

class InputFile extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { field, onChange } = this.props;
    const { key } = field;
    const { files } = e.currentTarget;
    onChange(key, files && files.length ? files[0] : null);
  }

  render() {
    const { className, field } = this.props;
    const { accept, key, type } = field;

    return (
      <input
        className={classNames({
          input: true,
          'input-file': true,
          [className]: className,
        })}
        accept={accept}
        id={key}
        onChange={this.onChange}
        type={type}
      />
    );
  }
}

InputFile.defaultProps = defaultProps;
InputFile.propTypes = propTypes;

export default InputFile;
