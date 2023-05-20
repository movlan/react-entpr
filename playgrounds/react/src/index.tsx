import React from 'react';
import { createRoot } from 'react-dom/client';
import { Color } from '@movlan/react';

import '@movlan/scss/lib/Utilities'

const root = createRoot(document.getElementById('root')!);

root.render(<Color hexCode="#29f" />);
