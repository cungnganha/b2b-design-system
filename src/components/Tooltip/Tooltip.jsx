import React, { useState } from 'react';
import './Tooltip.css';

/**
 * Tooltip — Figma node 249:3220
 * Props:
 *   position  = 'top' | 'bottom' | 'left' | 'right'  (Figma: Polygon Position)
 *   wrap      = boolean  (Figma: Warp — text wraps to multiple lines)
 *   truncate  = boolean  (Figma: Truncate — long text scrollable)
 */
export function Tooltip({
  content   = 'Tooltip message',
  position  = 'top',
  wrap      = false,
  truncate  = false,
  maxWidth  = 250,
  maxHeight = 120,
  children,
}) {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const bubbleCls = [
    'ds-tooltip',
    `ds-tooltip--${position}`,
    wrap            ? 'ds-tooltip--wrap'     : '',
    wrap && truncate ? 'ds-tooltip--truncate' : '',
  ].filter(Boolean).join(' ');

  const bubbleStyle = {
    ...((wrap || truncate) && { maxWidth }),
    ...(truncate && { maxHeight, overflowY: 'auto' }),
  };

  return (
    <span
      className="ds-tooltip-host"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children ?? (
        <button type="button" className="ds-tooltip-trigger">Hover me</button>
      )}
      {visible && (
        <span className={bubbleCls} style={bubbleStyle} role="tooltip">
          {content}
        </span>
      )}
    </span>
  );
}
export default Tooltip;
