import React, { useState } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
}

const Select = (props: SelectProps) => {
  const { onOptionSelected: handler, options = [], label = 'Please select an option...' } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    setIsOpen((prevState) => !prevState);
    if (handler) {
      handler(option, optionIndex);
    }
  };

  const onLabelClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="dse-select">
      <button className="dse-select__label" onClick={onLabelClick}>
        {label}
        <svg
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen ? (
        <ul className="dse-select__overlay">
          {options.map((option, idx) => (
            <li key={option.value} onClick={() => onOptionSelected(option, idx)}>
              {option.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
