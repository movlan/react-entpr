import React, { ReactNode } from 'react';
import { FontSize } from '@movlan/foundation';
export interface TextProps {
    size?: keyof typeof FontSize;
    children: ReactNode;
}
declare const Text: (props: TextProps) => React.JSX.Element;
export default Text;
