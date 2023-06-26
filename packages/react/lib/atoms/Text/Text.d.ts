<<<<<<< HEAD
import React, { ReactNode } from 'react';
import { FontSize } from '@movlan/foundation';
export interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
=======
import React from 'react';
type TextProps = {};
>>>>>>> fe5ba66 (finish foundation package)
declare const Text: React.FC<TextProps>;
export default Text;
