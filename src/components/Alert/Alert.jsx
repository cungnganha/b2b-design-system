import React from 'react';
import './Alert.css';
const ICONS = {
  info:    <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
  success: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
  warning: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
  error:   <><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></>,
};
const SvgIcon = ({ variant, size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {ICONS[variant]}
  </svg>
);
export const Alert = ({ variant='info', style='subtle', size='md', title, description='Alert description with additional context.', showClose=true, onClose }) => (
  <div className={['ds-alert',`ds-alert--${variant}`,`ds-alert--${style}`,`ds-alert--${size}`].join(' ')} role="alert">
    <span className="ds-alert__icon"><SvgIcon variant={variant} size={size==='sm'?16:20}/></span>
    <div className="ds-alert__content">
      {title && <p className="ds-alert__title">{title}</p>}
      <p className="ds-alert__description">{description}</p>
    </div>
    {showClose && (
      <button className="ds-alert__close" onClick={onClose} aria-label="Close">
        <svg width={size==='sm'?14:16} height={size==='sm'?14:16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    )}
  </div>
);
export default Alert;
