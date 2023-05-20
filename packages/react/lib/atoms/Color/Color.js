import React from 'react';
<<<<<<< HEAD
import { Spacing } from '@movlan/foundation';
=======
import Spacing from '../../foundation/Spacing.js';
>>>>>>> f8ffb93 (finish atom/Color)

const Color = ({ hexCode, width = Spacing.sm, height = Spacing.sm }) => {
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
