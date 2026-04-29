import React from 'react';
import './Input.css';

export function Input({
  placeholder = 'Placeholder text',
  size = 'md',
  state = 'default',
  value,
  defaultValue,
  onChange,
  iconLeft = null,
  iconRight = null,
  label = null,
  helperText = null,
  type = 'text',
  id,
}) {
  const inputId = id || `input-${Math.random().toString(36).slice(2,7)}`;
  const isControlled = value !== undefined;

  return (
    <div className={`ds-input-wrap ds-input-wrap--${size}`}>
      {label && (
        <label className="ds-input__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={`ds-input-field ds-input-field--${size} ds-input-field--${state}`}>
        {iconLeft && (
          <span className="ds-input__icon ds-input__icon--left" aria-hidden="true">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          className="ds-input__el"
          type={type}
          placeholder={placeholder}
          disabled={state === 'disabled'}
          {...(isControlled
            ? { value, onChange: onChange || (() => {}) }
            : { defaultValue, onChange }
          )}
        />
        {iconRight && (
          <span className="ds-input__icon ds-input__icon--right" aria-hidden="true">
            {iconRight}
          </span>
        )}
      </div>
      {helperText && (
        <p className={`ds-input__helper${state === 'error' ? ' ds-input__helper--error' : ''}`}>
          {helperText}
        </p>
      )}
    </div>
  );
}

export default Input;
