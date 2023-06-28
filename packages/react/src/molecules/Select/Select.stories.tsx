import React from 'react';
import Select from './Select';
import { withA11Y } from '@storybook/addon-a11y'

import '@movlan/scss/lib/Select.css';

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

export default {
  title: 'Molecules|Select',
  decoretors: withA11Y,
};

export const Common = () => <Select options={options} />;

export const RenderOption = () =>
    <Select options={options} renderOption={({ getOptionRecommendedProps, option, isSelected }) => <span {...getOptionRecommendedProps()}>{option.label} {isSelected ? 'SELECTED !' : ''}</span>} />

export const CustomLabel = () => <Select label='Select a color' options={options} />
