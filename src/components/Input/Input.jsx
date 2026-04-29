import React from 'react';
import './Input.css';
export const Input = ({ placeholder='Placeholder text', size='md', state='default', value, onChange, iconLeft=null, iconRight=null, label=null, helperText=null, type='text' }) => (
  <div className={['ds-input-wrap',`ds-input-wrap--${size}`].join(' ')}>
    {label && <label className="ds-input__label">{label}</label>}
    <div className={['ds-input-field',`ds-input-field--${size}`,`ds-input-field--${state}`].join(' ')}>
      {iconLeft  && <span className="ds-input__icon">{iconLeft}</span>}
      <input className="ds-input__el" type={type} placeholder={placeholder} value={value!==undefined?value:undefined} onChange={onChange||(() => {})} disabled={state==='disabled'}/>
      {iconRight && <span className="ds-input__icon">{iconRight}</span>}
    </div>
    {helperText && <p className={['ds-input__helper',state==='error'&&'ds-input__helper--error'].filter(Boolean).join(' ')}>{helperText}</p>}
  </div>
);
export default Input;
