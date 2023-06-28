import React from 'react';
import { Spacing } from '@movlan/foundation';
declare type ImageProps = {
    width: keyof typeof Spacing;
    height: keyof typeof Spacing;
    alt: string;
    src: string;
};
declare const Image: (props: ImageProps) => React.JSX.Element;
export default Image;
