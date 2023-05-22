import React from 'react';
import { createRoot } from 'react-dom/client';
<<<<<<< HEAD
<<<<<<< HEAD
import App from './App';

const root = createRoot(document.getElementById('root')!);

root.render(<App />);
=======
import { Color } from '@movlan/react';
=======
import { Color, Image } from '@movlan/react';
>>>>>>> fe5ba66 (finish foundation package)

import '@movlan/scss/lib/Utilities'

const root = createRoot(document.getElementById('root')!);

<<<<<<< HEAD
root.render(<Color hexCode="#29f" />);
>>>>>>> f8ffb93 (finish atom/Color)
=======
root.render(<>
<Color hexCode="#29f" />
<Image width='xl' height='xl' alt='roof tops' src='https://images.unsplash.com/photo-1684258663024-00ddd14a0eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' />
</>);
>>>>>>> fe5ba66 (finish foundation package)
