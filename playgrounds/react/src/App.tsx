import React from 'react';
import { Margin, Select } from '@movlan/react';

import '@movlan/scss/lib/global.css';
import '@movlan/scss/lib/Utilities.css';
import '@movlan/scss/lib/Margin.css';
import '@movlan/scss/lib/Text.css';
import '@movlan/scss/lib/Select.css';

const options = [
  {
    label: 'Strict Black',
    value: 'black',
  },
  {
    label: 'Heavenly Green',
    value: 'green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

const App = () => {
  return (
    <div>
      <Margin space="md">
        <Select options={options} />
      </Margin>
    </div>
  );
};

export default App;
