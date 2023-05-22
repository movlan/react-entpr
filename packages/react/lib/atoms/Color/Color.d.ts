import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Spacing } from '@movlan/foundation';
=======
import Spacing from '../../foundation/Spacing';
>>>>>>> f8ffb93 (finish atom/Color)
=======
import { Spacing } from '@movlan/foundation';
>>>>>>> fe5ba66 (finish foundation package)
interface ColorProps {
    hexCode: string;
    width?: keyof typeof Spacing;
    height?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
