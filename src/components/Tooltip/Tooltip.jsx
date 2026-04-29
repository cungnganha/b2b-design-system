import React, { useState, useRef } from 'react';
import './Tooltip.css';

export function Tooltip({
  content = 'Tooltip message',
  position = 'top',
  truncate = false,
  maxWidth = 250,
  children,
}) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className="ds-tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children || (
        <button className="ds-tooltip-trigger" type="button">Hover me</button>
      )}
      {visible && (
        <span
          className={[
            'ds-tooltip',
            `ds-tooltip--${position}`,
            truncate && 'ds-tooltip--truncate',
          ].filter(Boolean).join(' ')}
          role="tooltip"
          style={{ maxWidth: truncate ? maxWidth : undefined }}
        >
          <span className="ds-tooltip__content">
            {content}
          </span>
        </span>
      )}
    </span>
  );
}

export default Tooltip;
