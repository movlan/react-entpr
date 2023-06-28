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
  UP_ARROW: 'ArrowUp',
  ESC: 'Escape',
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

const getPreviousOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
  if (currentIndex === null) return 0;
  if (currentIndex === 0) return options.length - 1;
  return currentIndex - 1;
};

const getNextOptionIndex = (currentIndex: number | null, options: SelectOption[]) => {
  if (currentIndex === null) return 0;
  if (currentIndex === options.length - 1) return 0;
  return currentIndex + 1;
};

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
  }, [isOpen, highlightedIndex]);

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

  const highlightOption = (optionIdx: number | null) => {
    setHighlightedIndex(optionIdx);
  };

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault();

    if (Object.values(KEY_CODES).includes(event.code) && !isOpen) {
      setIsOpen(true);

      highlightOption(0);
    }
  };

  const onOptionKeyDown: KeyboardEventHandler = (event) => {
    console.log(event.code);
    if (event.code === KEY_CODES.ESC) setIsOpen(false);

    if (event.code === KEY_CODES.UP_ARROW)
      highlightOption(getPreviousOptionIndex(highlightedIndex, options));

    if (event.code === KEY_CODES.DOWN_ARROW)
      highlightOption(getNextOptionIndex(highlightedIndex, options));

    if (event.code === KEY_CODES.ENTER && highlightedIndex !== null)
      onOptionSelected(options[highlightedIndex], highlightedIndex);
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
        data-testid='DseSelectButton'
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
                onMouseEnter: () => highlightOption(idx),
                onMouseLeave: () => highlightOption(null),
                onKeyDown: onOptionKeyDown,
                className: clsx(
                  'dse-select__option',
                  isSelected && 'dse-select__option--selected',
                  isHighlighted && 'dse-select__option--highlighted',
                ),
                role: 'menuitemradio',
                'aria-checked': isSelected ? true : undefined,
                'aria-label': option.label,
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
