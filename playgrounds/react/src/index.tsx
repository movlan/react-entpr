import React from 'react';
import { createRoot } from 'react-dom/client';
import { Text } from '@movlan/react';

import '@movlan/scss/lib/Utilities';

const root = createRoot(document.getElementById('root')!);

root.render(<Text size="xs">this is some text</Text>);
