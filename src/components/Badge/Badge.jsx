import React from 'react';
import './Badge.css';

export const Badge = ({ label = 'Badge', variant = 'default', style = 'subtle', size = 'md', showDot = true }) => (
  <span className={['ds-badge', `ds-badge--${variant}`, `ds-badge--${style}`, `ds-badge--${size}`].join(' ')}>
    {showDot && <span className="ds-badge__dot" />}
    {label}
  </span>
);

export default Badge;
