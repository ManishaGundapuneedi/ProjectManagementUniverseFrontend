import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FieldInput from './FieldInput';
// import { ErrorWithdrawal } from '../../exchange/src/svg';

const defaultProps = {
  className: '',
  info: null,
  autoComplete: true,
  autoFocus: false,
  onKeyDown: () => {},
};

const propTypes = {
  className: PropTypes.string,
  field: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.any.isRequired,
  info: PropTypes.node,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

const Field = ({
  className,
  field,
  onChange,
  value,
  info,
  autoComplete,
  onKeyDown,
  autoFocus,
}) => {
  const { key, label } = field;
  return (
    <label
      className={classNames({
        field: true,
        [`field--${key}`]: true,
        [className]: className,
      })}
      htmlFor={key}
    >
      <div>
        {label ? <span className="field__label">{label}</span> : null}
        {info && (
          <span>
            {/* <ErrorWithdrawal
              className="dashboard-order-wizard__info__icon"
              data-tip="React-tooltip"
              height={12}
              width={12}
            /> */}
            {info}
          </span>
        )}
      </div>
      <div className="field__input">
        <FieldInput
          field={field}
          onChange={onChange}
          value={value}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
        />
      </div>
    </label>
  );
};

Field.defaultProps = defaultProps;
Field.propTypes = propTypes;

export default Field;
