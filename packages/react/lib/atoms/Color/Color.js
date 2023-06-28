import React from 'react';
import { Spacing } from '@movlan/foundation';

const Color = (props) => {
    const { hexCode, width = Spacing.sm, height = Spacing.sm } = props;
    const className = `dse-width-${width} dse-height-${height}`;
    return (React.createElement("div", { className: className, style: {
            backgroundColor: hexCode,
        } }));
};

export { Color as default };
//# sourceMappingURL=Color.js.map
