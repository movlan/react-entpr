import React from 'react';

const Image = (props) => {
    const { width, height, alt, src } = props;
    const className = `dse-width-${width} dse-height-${height}`;
    return React.createElement("img", { className: className, alt: alt, src: src });
};

export { Image as default };
//# sourceMappingURL=Image.js.map
