import React from 'react';
import { Spacing } from '@movlan/foundation';
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: (props: ColorProps) => React.JSX.Element;
export default Color;
