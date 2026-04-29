import React, { useState } from 'react';
import './Tooltip.css';
export const Tooltip = ({ content='Tooltip message', position='top', children }) => {
  const [visible, setVisible] = useState(false);
  return (
    <span className="ds-tooltip-wrapper" onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)}>
      {children||<button className="ds-tooltip-trigger">Hover me</button>}
      {visible && <span className={['ds-tooltip',`ds-tooltip--${position}`].join(' ')} role="tooltip">{content}</span>}
    </span>
  );
};
export default Tooltip;
