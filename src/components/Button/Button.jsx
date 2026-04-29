import React from 'react';
import './Button.css';
export const Button = ({ label='Button', size='md', btnStyle='primary', disabled=false, loading=false, iconLeft=null, iconRight=null, iconOnly=null, onClick, ...props }) => {
  const cls = ['ds-btn',`ds-btn--${size}`,`ds-btn--${btnStyle}`,disabled&&'ds-btn--disabled',loading&&'ds-btn--loading',iconOnly&&'ds-btn--icon-only'].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled||loading} onClick={onClick} {...props}>
      {loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="ds-btn__spinner"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>}
      {!loading && iconLeft  && <span className="ds-btn__icon">{iconLeft}</span>}
      {!iconOnly && <span className="ds-btn__label">{label}</span>}
      {iconOnly  && <span className="ds-btn__icon">{iconOnly}</span>}
      {!loading && iconRight && <span className="ds-btn__icon">{iconRight}</span>}
    </button>
  );
};
export default Button;
