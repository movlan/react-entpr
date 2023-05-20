import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@movlan/react';

import '@movlan/scss/lib/Button.css';

ReactDOM.render(
  <Button label="This is a Button" />,
  document.querySelector('#root'),
);
