import React, { useId } from 'react';
import './Input.css';

export function Input({
  placeholder = 'Placeholder text',
  size        = 'md',
  state       = 'default',
  value,
  defaultValue,
  onChange,
  iconLeft   = null,
  iconRight  = null,
  label      = null,
  helperText = null,
  type       = 'text',
}) {
  const uid = useId();
  const controlled = value !== undefined;

  return (
    <div className={`ds-input-wrap ds-input-wrap--${size}`}>
      {label !== null && (
        <label className="ds-input__label" htmlFor={uid}>
          {label}
        </label>
      )}

      <div className={[
        'ds-input-field',
        `ds-input-field--${size}`,
        `ds-input-field--${state}`,
      ].join(' ')}>
        {iconLeft !== null && (
          <span className="ds-input__icon" aria-hidden="true">{iconLeft}</span>
        )}
        <input
          id={uid}
          className="ds-input__el"
          type={type}
          placeholder={placeholder}
          disabled={state === 'disabled'}
          {...(controlled
            ? { value, onChange: onChange ?? (() => {}) }
            : { defaultValue, onChange }
          )}
        />
        {iconRight !== null && (
          <span className="ds-input__icon" aria-hidden="true">{iconRight}</span>
        )}
      </div>

      {helperText !== null && (
        <p className={[
          'ds-input__helper',
          state === 'error' && 'ds-input__helper--error',
        ].filter(Boolean).join(' ')}>
          {helperText}
        </p>
      )}
    </div>
  );
}
export default Input;
