import React from 'react';
import './Button.css';

export function Button({
  children,
  label,
  size = 'md',
  variant = 'primary',
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  iconOnly = null,
  onClick,
  className = '',
  ...rest
}) {
  const text = children ?? label ?? 'Button';

  const cls = [
    'ds-btn',
    `ds-btn--${size}`,
    `ds-btn--${variant}`,
    disabled  ? 'ds-btn--disabled'  : '',
    loading   ? 'ds-btn--loading'   : '',
    iconOnly  ? 'ds-btn--icon-only' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={cls}
      disabled={disabled || loading}
      onClick={onClick}
      {...rest}
    >
      {loading && (
        <svg className="ds-btn__spinner" width="1em" height="1em"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      )}
      {!loading && iconLeft  && <span className="ds-btn__icon" aria-hidden="true">{iconLeft}</span>}
      {!iconOnly && <span className="ds-btn__label">{text}</span>}
      {iconOnly  && <span className="ds-btn__icon" aria-hidden="true">{iconOnly}</span>}
      {!loading && iconRight && <span className="ds-btn__icon" aria-hidden="true">{iconRight}</span>}
    </button>
  );
}
export default Button;
