import React, {
  KeyboardEventHandler,
  ReactNode,
  RefObject,
  createRef,
  useEffect,
  useState,
} from 'react';
import { clsx } from 'clsx';
import Text from '../../atoms/Text/Text';

const KEY_CODES = {
  ENTER: 'Enter',
  NUMPAD_ENTER: 'NumpadEnter',
  SPACE: 'Space',
  DOWN_ARROW: 'ArrowDown',
};

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
  const [highlightedIndex, setHighlightedIndex] = useState<null | number>(null);
  const [optionRefs, setOptionRefs] = useState<RefObject<HTMLLIElement>[]>([]);

  useEffect(() => {
    setOptionRefs(options.map(() => createRef<HTMLLIElement>()));
  }, [options.length]);

  useEffect(() => {
    if (highlightedIndex !== null && isOpen) {
      const ref = optionRefs[highlightedIndex];
      if (ref && ref.current) {
        ref.current.focus();
      }
    }
  }, [isOpen]);

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

  const highlightItem = (optionIdx: number | null) => {
    setHighlightedIndex(optionIdx);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if (Object.values(KEY_CODES).includes(event.code) && !isOpen) {
      setIsOpen(true);

      highlightItem(0);
    }
  };

  return (
    <div className="dse-select">
      <button
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        aria-controls="dse-select-list"
        className="dse-select__label"
        onClick={onLabelClick}
        onKeyDown={onButtonKeyDown}
      >
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
        <ul role="menu" id="dse-select-list" className="dse-select__overlay">
          {options.map((option, idx) => {
            const isSelected = idx === selectedIndex;
            const isHighlighted = idx === highlightedIndex;
            const renderOptionProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => ({
                onClick: () => onOptionSelected(option, idx),
                onMouseEnter: () => highlightItem(idx),
                onMouseLeave: () => highlightItem(null),
                className: clsx(
                  'dse-select__option',
                  isSelected && 'dse-select__option--selected',
                  isHighlighted && 'dse-select__option--highlighted',
                ),
                tabIndex: isHighlighted ? -1 : 0,
                key: option.value,
                ref: optionRefs[idx],
                ...overrideProps,
              }),
            };

            if (renderOption) {
              return renderOption(renderOptionProps);
            }

            return (
              <li {...renderOptionProps.getOptionRecommendedProps()}>
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
