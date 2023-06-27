import React, { useState } from 'react';
import Text from '../../atoms/Text/Text.js';

const Select = (props) => {
    const { onOptionSelected: handler, options = [], label = 'Please select an option...' } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
        }
        setSelectedIndex(optionIndex);
        setIsOpen(false);
    };
    const onLabelClick = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { className: "dse-select__label", onClick: onLabelClick },
            React.createElement(Text, null, selectedIndex === null ? label : options[selectedIndex].label),
            React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (React.createElement("ul", { className: "dse-select__overlay" }, options.map((option, idx) => {
            const isSelected = idx === selectedIndex;
            return (React.createElement("li", { className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`, key: option.value, onClick: () => onOptionSelected(option, idx) },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })))));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
