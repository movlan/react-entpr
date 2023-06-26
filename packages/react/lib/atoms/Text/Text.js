import React from 'react';
import { FontSize } from '@movlan/foundation';

const Text = ({ size = FontSize.base, children }) => {
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
