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
    <div>
      <button onClick={onLabelClick}>{label}</button>

      {isOpen ? (
        <ul>
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
