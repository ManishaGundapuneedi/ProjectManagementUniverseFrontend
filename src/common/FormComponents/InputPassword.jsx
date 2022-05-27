import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Hide, View } from '../../exchange/src/svg';

const defaultProps = {
  className: '',
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

class InputPassword extends Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      view: false,
    };
  }

  onChange(e) {
    const { field, onChange } = this.props;
    const { key } = field;
    onChange(key, e.currentTarget.value);
  }

  onClick() {
    const { view } = this.state;
    this.setState({
      view: !view,
    });
  }

  render() {
    const { className, field, value } = this.props;
    const { key, placeholder, type } = field;
    const { view } = this.state;
    let displayType = type;
    if (view) {
      displayType = 'text';
    }

    const icon = view ? (
      null
      // <View width={22} height={13} /> 
    ) : (null
      // <Hide width={25} height={15} />
    );

    return (
      <div className="input-password">
        <input
          className={classNames({
            input: true,
            'input-text': true,
            [className]: className,
          })}
          id={key}
          onChange={this.onChange}
          placeholder={placeholder}
          type={displayType}
          value={value}
        />
        <button tabIndex="-1" onClick={() => this.onClick()}>
          {icon}
        </button>
      </div>
    );
  }
}

InputPassword.defaultProps = defaultProps;
InputPassword.propTypes = propTypes;

export default InputPassword;
