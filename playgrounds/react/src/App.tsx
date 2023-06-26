import React from 'react';
import { Margin, Text } from '@movlan/react';

import '@movlan/scss/lib/Utilities.css';
import '@movlan/scss/lib/Margin.css';
import '@movlan/scss/lib/Text.css';
import '@movlan/scss/lib/global.css';

type Props = {};

const App = () => {
  return (
    <div>
    <Margin>
        <Text size="xs">this is some text</Text>
      </Margin>
    </div>
  );
};

export default App;
