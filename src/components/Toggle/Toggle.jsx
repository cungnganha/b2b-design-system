import React from 'react';
import './Toggle.css';

export const Toggle = ({ label='Toggle', size='md', on=false, disabled=false, showLabel=true, onChange }) => (
  <label className={['ds-toggle', `ds-toggle--${size}`, on&&'ds-toggle--on', disabled&&'ds-toggle--disabled'].filter(Boolean).join(' ')}>
    <span className="ds-toggle__track"><span className="ds-toggle__thumb" /></span>
    {showLabel && <span className="ds-toggle__label">{label}</span>}
    <input type="checkbox" checked={on} disabled={disabled} onChange={onChange} style={{display:'none'}} />
  </label>
);
export default Toggle;
