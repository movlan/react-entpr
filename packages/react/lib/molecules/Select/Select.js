import React, { useState } from 'react';

const Select = (props) => {
    const { onOptionSelected: handler, options = [], label = 'Please select an option...' } = props;
    const [isOpen, setIsOpen] = useState(false);
    const onOptionSelected = (option, optionIndex) => {
        setIsOpen((prevState) => !prevState);
        if (handler) {
            handler(option, optionIndex);
        }
    };
    const onLabelClick = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (React.createElement("div", null,
        React.createElement("button", { onClick: onLabelClick }, label),
        isOpen ? (React.createElement("ul", null, options.map((option, idx) => (React.createElement("li", { key: option.value, onClick: () => onOptionSelected(option, idx) }, option.label))))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
