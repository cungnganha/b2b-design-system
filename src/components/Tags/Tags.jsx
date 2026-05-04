import React from 'react';
import { X } from '../Icons/icons';
import { Avatar } from '../Avatar/Avatar';
import './Tags.css';

const AVATAR_SIZE = { sm: 'xs', md: 'xs', lg: 'sm' };

export function Tag({
  label = 'Tag',
  variant = 'default',
  tagStyle = 'subtle',
  size = 'md',
  clickable = false,
  removable = false,
  onRemove,
  onClick,
  avatar = false,
  avatarInitials = 'AB',
  avatarColor = 'brand',
  disabled = false,
  className = '',
}) {
  const classes = [
    'ds-tag',
    `ds-tag--${variant}`,
    `ds-tag--${tagStyle}`,
    `ds-tag--${size}`,
    clickable && 'ds-tag--clickable',
    removable && 'ds-tag--removable',
    disabled && 'ds-tag--disabled',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (!disabled && clickable && onClick) ? onClick : undefined;

  const iconSize = size === 'lg' ? 12 : 10;

  return (
    <span
      className={classes}
      onClick={handleClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable && !disabled ? 0 : undefined}
      onKeyDown={clickable && !disabled ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick?.(); } } : undefined}
      aria-disabled={disabled || undefined}
    >
      {avatar && (
        <span className="ds-tag__avatar">
          <Avatar
            initials={avatarInitials}
            size={AVATAR_SIZE[size]}
            color={avatarColor}
            shape="circle"
          />
        </span>
      )}
      <span className="ds-tag__label">{label}</span>
      {removable && (
        <button
          type="button"
          className="ds-tag__remove"
          onClick={(e) => { e.stopPropagation(); if (!disabled) onRemove?.(); }}
          tabIndex={-1}
          aria-label={`Remove ${label}`}
          disabled={disabled}
        >
          <X size={iconSize} strokeWidth={2.5} />
        </button>
      )}
    </span>
  );
}

export default Tag;
