import React from 'react';
import './Radio.css';

export const Radio = ({ label='Radio option', size='md', selected=false, disabled=false, showLabel=true, onChange }) => {
  const state = disabled ? (selected ? 'disabled-selected' : 'disabled') : selected ? 'selected' : 'unselected';
  return (
    <label className={['ds-radio', `ds-radio--${size}`, `ds-radio--${state}`].join(' ')}>
      <span className="ds-radio__circle">{selected && <span className="ds-radio__dot" />}</span>
      {showLabel && <span className="ds-radio__label">{label}</span>}
      <input type="radio" checked={selected} disabled={disabled} onChange={onChange} style={{ display:'none' }} />
    </label>
  );
};
export default Radio;
