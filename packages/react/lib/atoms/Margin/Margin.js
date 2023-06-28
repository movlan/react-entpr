import React from 'react';

const Margin = (props) => {
    const { space = 'xxxs', children, top, left, right, bottom } = props;
    let className = ``;
    if (!top && !bottom && !left && !right) {
        className = `dse-margin-${space}`;
    }
    if (left) {
        className = `${className} dse-margin-left-${space}`;
    }
    if (right) {
        className = `${className} dse-margin-right-${space}`;
    }
    if (top) {
        className = `${className} dse-margin-top-${space}`;
    }
    if (bottom) {
        className = `${className} dse-margin-bottom-${space}`;
    }
    return React.createElement("div", { className: className }, children);
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
