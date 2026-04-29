import React from 'react';
import './Checkbox.css';

export const Checkbox = ({
  label = 'Checkbox label',
  size = 'md',
  checked = false,
  indeterminate = false,
  disabled = false,
  showLabel = true,
  onChange,
}) => {
  const state = disabled ? (checked ? 'disabled-checked' : 'disabled') : checked ? 'checked' : 'unchecked';
  return (
    <label className={['ds-checkbox', `ds-checkbox--${size}`, `ds-checkbox--${state}`].join(' ')}>
      <span className="ds-checkbox__box">
        {(checked && !indeterminate) && <span className="ds-checkbox__check">✓</span>}
        {indeterminate && <span className="ds-checkbox__indeterminate">–</span>}
      </span>
      {showLabel && <span className="ds-checkbox__label">{label}</span>}
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} style={{ display: 'none' }} />
    </label>
  );
};
export default Checkbox;
