import React from 'react';
import { FontSize } from '@movlan/foundation';

const Text = (props) => {
    const { size = FontSize.base, children } = props;
    const className = `dse-text dse-text-${size}`;
    return React.createElement("p", { className: className }, children);
};

export { Text as default };
//# sourceMappingURL=Text.js.map
