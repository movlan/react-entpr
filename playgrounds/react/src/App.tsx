import React from 'react';
import { Margin, Select } from '@mvln/react';

import '@mvln/scss/lib/global.css';
import '@mvln/scss/lib/Utilities.css';
import '@mvln/scss/lib/Margin.css';
import '@mvln/scss/lib/Text.css';
import '@mvln/scss/lib/Select.css';

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
