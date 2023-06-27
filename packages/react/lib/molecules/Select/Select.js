import React, { useState, useEffect, createRef } from 'react';
import { clsx } from 'clsx';
import Text from '../../atoms/Text/Text.js';

const KEY_CODES = {
    ENTER: 'Enter',
    NUMPAD_ENTER: 'NumpadEnter',
    SPACE: 'Space',
    DOWN_ARROW: 'ArrowDown',
    UP_ARROW: 'ArrowUp',
    ESC: 'Escape',
};
const getPreviousOptionIndex = (currentIndex, options) => {
    if (currentIndex === null)
        return 0;
    if (currentIndex === 0)
        return options.length - 1;
    return currentIndex - 1;
};
const getNextOptionIndex = (currentIndex, options) => {
    if (currentIndex === null)
        return 0;
    if (currentIndex === options.length - 1)
        return 0;
    return currentIndex + 1;
};
const Select = (props) => {
    const { onOptionSelected: handler, options = [], label = 'Please select an option...', renderOption, } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [highlightedIndex, setHighlightedIndex] = useState(null);
    const [optionRefs, setOptionRefs] = useState([]);
    useEffect(() => {
        setOptionRefs(options.map(() => createRef()));
    }, [options.length]);
    useEffect(() => {
        if (highlightedIndex !== null && isOpen) {
            const ref = optionRefs[highlightedIndex];
            if (ref && ref.current) {
                ref.current.focus();
            }
        }
    }, [isOpen, highlightedIndex]);
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
    const highlightOption = (optionIdx) => {
        setHighlightedIndex(optionIdx);
    };
    const onButtonKeyDown = (event) => {
        event.preventDefault();
        if (Object.values(KEY_CODES).includes(event.code) && !isOpen) {
            setIsOpen(true);
            highlightOption(0);
        }
    };
    const onOptionKeyDown = (event) => {
        console.log(event.code);
        if (event.code === KEY_CODES.ESC)
            setIsOpen(false);
        if (event.code === KEY_CODES.UP_ARROW)
            highlightOption(getPreviousOptionIndex(highlightedIndex, options));
        if (event.code === KEY_CODES.DOWN_ARROW)
            highlightOption(getNextOptionIndex(highlightedIndex, options));
        if (event.code === KEY_CODES.ENTER && highlightedIndex !== null)
            onOptionSelected(options[highlightedIndex], highlightedIndex);
    };
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, "aria-controls": "dse-select-list", className: "dse-select__label", onClick: onLabelClick, onKeyDown: onButtonKeyDown },
            React.createElement(Text, null, selectedIndex === null ? label : options[selectedIndex].label),
            React.createElement("svg", { className: `dse-select__caret dse-select__caret--${isOpen ? 'open' : 'closed'}`, width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 8.25l-7.5 7.5-7.5-7.5" }))),
        isOpen ? (React.createElement("ul", { role: "menu", id: "dse-select-list", className: "dse-select__overlay" }, options.map((option, idx) => {
            const isSelected = idx === selectedIndex;
            const isHighlighted = idx === highlightedIndex;
            const renderOptionProps = {
                option,
                isSelected,
                getOptionRecommendedProps: (overrideProps = {}) => ({
                    onClick: () => onOptionSelected(option, idx),
                    onMouseEnter: () => highlightOption(idx),
                    onMouseLeave: () => highlightOption(null),
                    onKeyDown: onOptionKeyDown,
                    className: clsx('dse-select__option', isSelected && 'dse-select__option--selected', isHighlighted && 'dse-select__option--highlighted'),
                    'aria-checked': isSelected ? true : undefined,
                    tabIndex: isHighlighted ? -1 : 0,
                    key: option.value,
                    ref: optionRefs[idx],
                    ...overrideProps,
                }),
            };
            if (renderOption) {
                return renderOption(renderOptionProps);
            }
            return (React.createElement("li", { ...renderOptionProps.getOptionRecommendedProps() },
                React.createElement(Text, null, option.label),
                isSelected && (React.createElement("svg", { width: "1rem", height: "1rem", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4.5 12.75l6 6 9-13.5" })))));
        }))) : null));
};

export { Select as default };
//# sourceMappingURL=Select.js.map
