import React from 'react';
import './Badge.css';

export function Badge({
  label = 'Badge',
  variant = 'default',
  badgeStyle = 'subtle',
  size = 'md',
  showDot = true,
}) {
  return (
    <span className={[
      'ds-badge',
      `ds-badge--${variant}`,
      `ds-badge--${badgeStyle}`,
      `ds-badge--${size}`,
    ].join(' ')}>
      {showDot && <span className="ds-badge__dot" aria-hidden="true" />}
      <span className="ds-badge__label">{label}</span>
    </span>
  );
}

export default Badge;
