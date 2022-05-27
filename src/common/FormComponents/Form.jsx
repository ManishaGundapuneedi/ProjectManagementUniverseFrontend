import PropTypes from 'prop-types';
import { Component } from 'react';
import { validate } from './utils';

const defaultProps = {
  defaultValues: {},
};

const propTypes = {
  children: PropTypes.func.isRequired,
  defaultValues: PropTypes.shape({}),
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      errors: {},
      values: { ...props.defaultValues },
    };
  }

  onChange(key, value) {
    this.setState(state => ({
      values: {
        ...state.values,
        [key]: value,
      },
      errors: {
        ...state.errors,
        [key]: [],
      },
    }));
  }

  clear() {
    this.setState({
      errors: {},
      values: { ...this.props.defaultValues },
    });
  }

  validate(fields) {
    const { values } = this.state;
    const errors = validate(fields, values);
    this.setState({
      errors,
    });

    return errors;
  }

  render() {
    const { errors, values } = this.state;
    const { children } = this.props;

    return children({
      errors,
      onChange: this.onChange,
      clear: this.clear,
      validate: this.validate,
      values,
    });
  }
}

Form.defaultProps = defaultProps;
Form.propTypes = propTypes;

export default Form;
