import React, { ReactNode, useState } from 'react';
import Text from '../../atoms/Text/Text';

interface SelectOption {
  label: string;
  value: string;
}

interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: object) => object;
}

interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => ReactNode;
}

const Select = (props: SelectProps) => {
  const {
    onOptionSelected: handler,
    options = [],
    label = 'Please select an option...',
    renderOption,
  } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }
    setSelectedIndex(optionIndex);
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="dse-select">
      <button className="dse-select__label" onClick={onLabelClick}>
        <Text>{selectedIndex === null ? label : options[selectedIndex].label}</Text>
        <svg
          className={`dse-select__caret dse-select__caret--${isOpen ? 'open' : 'closed'}`}
          width="1rem"
          height="1rem"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {isOpen ? (
        <ul className="dse-select__overlay">
          {options.map((option, idx) => {
            const isSelected = idx === selectedIndex;

            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                className: `dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`,
                key: option.value,
                onClick: () => onOptionSelected(option, idx),
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li
                className={`dse-select__option ${isSelected ? 'dse-select__option--selected' : ''}`}
                key={option.value}
                onClick={() => onOptionSelected(option, idx)}
              >
                <Text>{option.label}</Text>
                {isSelected && (
                  <svg
                    width="1rem"
                    height="1rem"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
