import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
=======
import { Color } from '@movlan/react';

import '@movlan/scss/lib/Utilities'

const root = createRoot(document.getElementById('root')!);

root.render(<Color hexCode="#29f" />);
>>>>>>> f8ffb93 (finish atom/Color)
