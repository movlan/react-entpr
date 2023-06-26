import React, { ReactNode } from 'react';
import { FontSize } from '@movlan/foundation';
export interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
declare const Text: React.FC<TextProps>;
export default Text;
