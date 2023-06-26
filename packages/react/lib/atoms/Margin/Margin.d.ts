import React from 'react';
import { Spacing } from '@movlan/foundation';
interface MarginProps {
    space?: keyof typeof Spacing;
    top?: boolean;
    right?: boolean;
    left?: boolean;
    bottom?: boolean;
    children: React.ReactNode;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
