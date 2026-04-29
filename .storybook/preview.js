import React from 'react';
import '../src/tokens/tokens.css';

const preview = {
  parameters: {
    controls: { matchers: { color:/(background|color)$/i, date:/Date$/i } },
    layout: 'padded',
    backgrounds: {
      default: 'white',
      values: [
        { name:'white',   value:'#FFFFFF' },
        { name:'surface', value:'#F8FAFC' },
        { name:'dark',    value:'#0F172A' },
      ],
    },
    options: {
      storySort: {
        order: [
          'Foundations', ['Colors','Typography','Icons'],
          'Components',  ['Button','Input','Checkbox','Radio','Toggle','Badge','Alert','Tooltip','Avatar'],
        ],
      },
    },
  },
};
export default preview;
