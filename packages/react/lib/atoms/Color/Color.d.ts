import React from 'react';
<<<<<<< HEAD
import { Spacing } from '@movlan/foundation';
=======
import Spacing from '../../foundation/Spacing';
>>>>>>> f8ffb93 (finish atom/Color)
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
