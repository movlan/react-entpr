import React, { ReactNode } from 'react';
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
declare const Select: (props: SelectProps) => React.JSX.Element;
export default Select;
