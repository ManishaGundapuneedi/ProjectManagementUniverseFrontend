import PropTypes from 'prop-types';
import React from 'react';
import InputDate from './InputDate';
import InputFile from './InputFile';
import InputNumber from './InputNumber';
import InputRadio from './InputRadio';
import InputSelect from './InputSelect';
import InputText from './InputText';
import InputPassword from './InputPassword';
import * as fieldTypes from './fieldTypes';

const defaultProps = {
  className: '',
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

const FieldInput = props => {
  const { type } = props.field;

  switch (type) {
    case fieldTypes.DATE:
      return <InputDate {...props} />;
    case fieldTypes.FILE:
      return <InputFile {...props} />;
    case fieldTypes.NUMBER:
      return <InputNumber {...props} />;
    case fieldTypes.RADIO:
      return <InputRadio {...props} />;
    case fieldTypes.SELECT:
      return <InputSelect {...props} />;
    case fieldTypes.PASSWORD:
      return <InputPassword {...props} />;
    default:
      return <InputText {...props} />;
  }
};

FieldInput.defaultProps = defaultProps;
FieldInput.propTypes = propTypes;

export default FieldInput;
