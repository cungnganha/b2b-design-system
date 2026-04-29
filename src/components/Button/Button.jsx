import React from 'react';
import './Button.css';

export function Button({
  children,
  label = 'Button',
  size = 'md',
  variant = 'primary',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  onClick,
  className = '',
  ...props
}) {
  const cls = [
    'ds-btn',
    `ds-btn--${size}`,
    `ds-btn--${variant}`,
    disabled  && 'ds-btn--disabled',
    loading   && 'ds-btn--loading',
    iconOnly  && 'ds-btn--icon-only',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          className="ds-btn__spinner" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      )}
      {!loading && iconLeft  && <span className="ds-btn__icon">{iconLeft}</span>}
      {!iconOnly && <span className="ds-btn__label">{children || label}</span>}
      {iconOnly  && <span className="ds-btn__icon">{iconOnly}</span>}
      {!loading && iconRight && <span className="ds-btn__icon">{iconRight}</span>}
    </button>
  );
}

export default Button;
